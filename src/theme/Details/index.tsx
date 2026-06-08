/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
	useRef,
	useState,
	useEffect,
	type ComponentProps,
	type ReactElement,
} from 'react';
import clsx from 'clsx';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useCollapsible, Collapsible } from '@docusaurus/theme-common';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

function isInSummary(node: HTMLElement | null): boolean {
	if (!node) {
		return false;
	}
	return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}

function hasParent(node: HTMLElement | null, parent: HTMLElement): boolean {
	if (!node) {
		return false;
	}
	return node === parent || hasParent(node.parentElement, parent);
}

export type DetailsProps = {
	/**
	 * Summary is provided as props, optionally including the wrapping
	 * `<summary>` tag
	 */
	summary?: ReactElement | string;
	tagged?: boolean;
	important?: boolean;
} & ComponentProps<'details'>;

/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */
export default function Details({
	summary,
	children,
	...props
}: DetailsProps): JSX.Element {

	const isBrowser = useIsBrowser();
	const detailsRef = useRef<HTMLDetailsElement>(null);

	const { collapsed, setCollapsed } = useCollapsible({
		initialState: !props.open,
	});
	// Use a separate state for the actual details prop, because it must be set
	// only after animation completes, otherwise close animations won't work
	const [open, setOpen] = useState(props.open);

	const elementToString = (element: any): string => {
		if (React.isValidElement(element)) {
			return React.Children.toArray((element as ReactElement).props.children).map(child => elementToString(child)).join('');
		}
		else if (Array.isArray(element)) {
			return element.map(el => elementToString(el)).join('');
		}
		return String(element);
	};

	const isEmptyNode = (node: React.ReactNode): boolean => {
		if (node === null || node === undefined || node === false) {
			return true;
		}
		if (typeof node === 'string') {
			return node.trim().length === 0;
		}
		if (typeof node === 'number') {
			return false;
		}
		if (Array.isArray(node)) {
			return node.every(isEmptyNode);
		}
		if (React.isValidElement(node)) {
			return isEmptyNode((node as ReactElement).props.children);
		}
		return false;
	};

	const hasVisibleChildren = React.Children.toArray(children).some(child => !isEmptyNode(child));

	if (props.id === undefined) {
		let cleanID = elementToString((summary as ReactElement).props.children)
		if (typeof cleanID === 'string') {
			cleanID = cleanID
				.toLowerCase()
				.replace(/\s+/g, '-')
				.replace(/[^a-z0-9-]/g, '');
			props.id = cleanID;
		}
	}

	useEffect(() => {
		if (!isBrowser || !props.id) {
			return;
		}

		if (window.location.hash === `#${props.id}`) {
			setCollapsed(false);
			setOpen(true);
			setTimeout(() => {
				const id = props.id;
				if (!id) return;
				const element = document.getElementById(id);
				if (element) element.scrollIntoView();
			}, 100);
		}
	}, [props.id, isBrowser, setCollapsed]);

	useEffect(() => {
		if (!isBrowser || !props.id) return;

		const handleHashChange = () => {
			if (window.location.hash === `#${props.id}`) {
				setCollapsed(false);
				setOpen(true);
			}
		};

		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, [props.id, isBrowser, setCollapsed]);

	const summaryTag = (() => {
		useBrokenLinks().collectAnchor(props.id);
		return (
			<Link
				className="hash-link"
				to={`#${props.id}`}
				aria-label={props.id}
				title={props.id}>
				&#8203;
			</Link>
		)
	})

	const summaryElement = React.isValidElement(summary) ? (
		<summary>{(summary as ReactElement).props.children} {props.tagged && props.id && summaryTag()}</summary>
	) : (
		<summary>{summary} {props.tagged && props.id && summaryTag()}</summary>
	);

	if (!hasVisibleChildren) {
		return (
			<details
				{...props}
				ref={detailsRef}
				className={clsx(props.className, styles.emptyDetails)}>
				{summaryElement}
				{children}
			</details>
		);
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
		<details
			{...props}
			ref={detailsRef}
			open={open}
			data-collapsed={collapsed}
			className={clsx(
				styles.details,
				isBrowser && styles.isBrowser,
				props.className,
				props.important && styles.important,
			)}
			onMouseDown={(e) => {
				const target = e.target as HTMLElement;
				// Prevent a double-click to highlight summary text
				if (isInSummary(target) && e.detail > 1) {
					e.preventDefault();
				}
			}}
			onClick={(e) => {
				const target = e.target as HTMLElement;
				// Don't stop propagation if clicking the hash link
				if (target.classList.contains('hash-link')) {
					return;
				}
				if (target.classList.contains('medium-zoom-image')) {
					return;
				}

				e.stopPropagation(); // For isolation of multiple nested details/summary
				// const target = e.target as HTMLElement;
				const shouldToggle =
					isInSummary(target) && hasParent(target, detailsRef.current!);
				if (!shouldToggle) {
					return;
				}
				e.preventDefault();
				if (collapsed) {
					setCollapsed(false);
					setOpen(true);
					// ~~Update URL hash when opening~~
					// // don't do this because it scrolls to the content every time. 
					// if (props.id) {
					// 	window.location.hash = props.id;
					// }
				} else {
					setCollapsed(true);
					// Don't do this, it breaks close animation!
					// setOpen(false);
				}
			}}>
			{summaryElement}

			<Collapsible
				lazy={false} // Content might matter for SEO in this case
				collapsed={collapsed}
				disableSSRStyle // Allows component to work fine even with JS disabled!
				onCollapseTransitionEnd={(newCollapsed) => {
					setCollapsed(newCollapsed);
					setOpen(!newCollapsed);
				}}>
				<div className={styles.collapsibleContent}>{children}</div>
			</Collapsible>
		</details>
	);
}
