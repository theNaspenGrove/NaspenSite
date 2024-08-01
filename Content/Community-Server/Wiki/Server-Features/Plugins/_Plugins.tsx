import React from 'react';

// Example lists
type PluginValues = [string, string, platform?: string, publishedByNaspen?: boolean];

const data: Record<string, PluginValues> = {
    AdvancedPortals: [
        "https://www.spigotmc.org/resources/advanced-portals.14356/", 
        "Advanced Portals",
        "Spigot"
    ],
    AspenPrefix: [
        "https://github.com/theNaspenGrove/AspenPrefix", 
        "Aspen Prefix",
        "GitHub"
    ],
    ByTheFish: [
        "https://github.com/theNaspenGrove/ByTheFish", 
        "By The Fish",
        "GitHub"
    ],
    CarbonChat: [
        "https://modrinth.com/plugin/carbon", 
        "Carbon Chat",
        "Modrinth"
    ],
    CarefulMoss: [
        "https://github.com/theNaspenGrove/CarefulMoss", 
        "Careful Moss",
        "GitHub"
    ],
    ChargedExplosions: [
        "https://github.com/theNaspenGrove/ChargedExplosions", 
        "Charged Explosions",
        "GitHub"
    ],
    Chunky: [
        "https://modrinth.com/plugin/chunky", 
        "Chunky",
        "Modrinth"
    ],
    CoreProtect: [
        "https://modrinth.com/plugin/coreprotect", 
        "CoreProtect",
        "Modrinth"
    ],
    DiscordSRV: [
        "https://modrinth.com/plugin/discordsrv", 
        "DiscordSRV",
        "Modrinth"
    ],
    EssentialsX: [
        "https://essentialsx.net/downloads.html", 
        "EssentialsX"
    ],
    EssentialsXChat: [
        "https://essentialsx.net/downloads.html", 
        "EssentialsX Chat"
    ],
    EssentialsXSpawn: [
        "https://essentialsx.net/downloads.html", 
        "EssentialsX Spawn"
    ],
    EternalLight: [
        "https://essentialsx.net/downloads.html", 
        "Eternal Light"
    ],
    FreedomChat: [
        "https://modrinth.com/plugin/freedomchat", 
        "Freedom Chat",
        "Modrinth"
    ],
    ItemShift: [
        "https://github.com/theNaspenGrove/ItemShift", 
        "Item Shift",
        "GitHub",
        true
    ],
    ItemSwapper: [
        "https://modrinth.com/plugin/itemswapper", 
        "Item Swapper Plugin",
        "Modrinth"
    ],
    LightMaker: [
        "https://modrinth.com/plugin/lightmaker", 
        "Light Maker",
        "Modrinth",
        true
    ],
    LuckPerms: [
        "https://luckperms.net/download", 
        "LuckPerms"
    ],
    MinecraftAuth: [
        "https://github.com/MinecraftAuthentication/plugin/releases", 
        "MinecraftAuth",
        "Modrinth"
    ],
    MinecraftAuthRoles: [
        "https://github.com/theNaspenGrove/MinecraftAuthenticationRoles", 
        "MinecraftAuthRoles",
        "Modrinth",
        true
    ],
    MiniPlaceholders: [
        "https://modrinth.com/plugin/miniplaceholders", 
        "MiniPlaceholders",
        "Modrinth"
    ],
    MultiVerseCore: [
        "https://modrinth.com/plugin/multiverse-core", 
        "MultiVerse Core",
        "Modrinth"
    ],
    NasPanoptiCam: [
        "https://github.com/theNaspenGrove/NasPanoptiCam", 
        "NasPanoptiCam",
        "GitHub"
    ],
    NaspenBlockDispenser: [
        "https://github.com/theNaspenGrove/NaspenBlockDispenser", 
        "Naspen Block Dispenser",
        "GitHub"
    ],
    NaspenRenewables: [
        "https://github.com/theNaspenGrove/NaspenRenewables", 
        "Naspen Renewables",
        "GitHub"
    ],
    NewOrigin: [
        "https://github.com/theNaspenGrove/newOrigin", 
        "New Origin",
        "GitHub"
    ],
    NoPlayerKillPlz: [
        "https://github.com/theNaspenGrove/NoPlayerKillPlz", 
        "No Player Kill Plz",
        "GitHub"
    ],
    PacketEvents: [
        "https://github.com/retrooper/packetevents", 
        "PacketEvents",
        "GitHub"
    ],
    PAPIProxyBridge: [
        "https://modrinth.com/plugin/papiproxybridge", 
        "PAPI Proxy Bridge",
        "Modrinth"
    ],
    Periderm: [
        "https://modrinth.com/plugin/periderm", 
        "Periderm",
        "Modrinth",
        true
    ],
    PlaceholderAPI: [
        "https://www.spigotmc.org/resources/placeholderapi.6245/", 
        "PlaceholderAPI",
        "Spigot"
    ],
    PlaceholderAPIExpansions: [
        "https://modrinth.com/plugin/miniplaceholders-placeholderapi-expansion", 
        "PlaceholderAPI Expansions",
        "Modrinth"
    ],
    PLHidePro: [
        "https://www.spigotmc.org/resources/%E2%9C%94%EF%B8%8F-plugin-hide-pro-decide-which-commands-are-executable-and-visible-spigot-bungee-velocity-%E2%9C%94%EF%B8%8F.77112/", 
        "PL-Hide Pro",
        "Spigot"
    ],
    PlotSquared: [
        "https://www.spigotmc.org/resources/plotsquared-v7.77506/", 
        "PlotSquared V7",
        "Spigot"
    ],
    ProtocolLib: [
        "https://www.spigotmc.org/resources/protocollib.1997/", 
        "ProtocolLib",
        "Spigot"
    ],
    Protocolize: [
        "https://www.spigotmc.org/resources/protocolize-protocollib-for-bungeecord-waterfall-velocity.63778/", 
        "Protocolize",
        "Spigot"
    ],
    SafeReset: [
        "https://github.com/theNaspenGrove/SafeReset", 
        "Safe Reset",
        "GitHub"
    ],
    SafeSpectate: [
        "https://github.com/theNaspenGrove/SafeSpectate", 
        "Safe Spectate",
        "GitHub"
    ],
    ServerStone: [
        "https://github.com/theNaspenGrove/ServerStone", 
        "Server Stone",
        "GitHub"
    ],
    ShiftableSpawners: [
        "https://github.com/theNaspenGrove/ShiftableSpawners", 
        "Shiftable Spawners",
        "GitHub",
        true
    ],
    ShockingClusters: [
        "", 
        "Shocking Clusters",
        ""
    ],
    SlashServer: [
        "https://modrinth.com/plugin/slashserver", 
        "SlashServer",
        "Modrinth"
    ],
    SquareMap: [
        "https://modrinth.com/plugin/squaremap", 
        "SquareMap",
        "Modrinth"
    ],
    StormMaster: [
        "https://github.com/theNaspenGrove/StormMaster", 
        "Storm Master",
        "GitHub"
    ],
    TabBridge: [
        "https://github.com/NEZNAMY/TAB-Bridge", 
        "Tab Bridge",
        "GitHub"
    ],
    TAB: [
        "https://modrinth.com/plugin/tab-was-taken", 
        "TAB",
        "Modrinth"
    ],
    Vault: [
        "https://www.spigotmc.org/resources/vault.34315/", 
        "Vault",
        "Spigot"
    ],
    VoidGen: [
        "https://www.spigotmc.org/resources/voidgen.25391/", 
        "VoidGen",
        "Spigot"
    ],
    WanderingTrades: [
        "https://www.spigotmc.org/resources/wandering-trades-easily-customize-wandering-traders-1-16-5-1-20-6.79068/", 
        "Wandering Trades",
        "Spigot"
    ],
    WaterloggedEndermen: [
        "https://github.com/theNaspenGrove/WaterLoggedEndermen", 
        "Waterlogged Endermen",
        "GitHub"
    ],
    WorldEdit: [
        "https://modrinth.com/plugin/worldedit", 
        "World Edit",
        "Modrinth"
    ],
    WorldGuard: [
        "https://dev.bukkit.org/projects/worldguard", 
        "World Guard"
    ],
    WorldNamePacket: [
        "https://modrinth.com/plugin/worldnamepacket", 
        "World Name Packet",
        "Modrinth"
    ],
};

// Function to create link element
const createLinkElement = (key: string) => {
    // Find matching items in lists
    const url = data[key]?.[0];
    const title = data[key]?.[1];
    let platform = data[key]?.length > 2 ? data[key][2] : undefined;
    const naspenBuilt = data[key]?.length > 3 ? data[key][3] : false;

    // Check if all values are found
    if (!title ) {
        return <p>Key not found in one or more lists.</p>;
    }

    // Return link element
    return (
        <>
        {getPlatformElement(platform)}
        {url ? (<a href={url} title={title}>
        {title}
        </a>) : <span>{title}</span>}
        {
        naspenBuilt ? (<code style={{backgroundColor: '#e4e319', color: '#1c1c1c', fontWeight: 'bold'}} className='margin-left--sm padding-horiz--xs'>Published</code>) : null
        }
        </>
    );
};

const getPlatformElement = (platform) => {
    let iconSrc = '';
    let iconStyle = {width: '1.5em', height: '1.5em', marginRight: '0.5em', };

    // Switch on platform to set the image source
    switch (platform) {
        case 'Modrinth':
            return (
                <svg style={{...iconStyle, color: '#1bd96a'}} viewBox="0 0 512 514" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M503.16 323.56C514.55 281.47 515.32 235.91 503.2 190.76C466.57 54.2299 326.04 -26.8001 189.33 9.77991C83.8101 38.0199 11.3899 128.07 0.689941 230.47H43.99C54.29 147.33 113.74 74.7298 199.75 51.7098C306.05 23.2598 415.13 80.6699 453.17 181.38L411.03 192.65C391.64 145.8 352.57 111.45 306.3 96.8198L298.56 140.66C335.09 154.13 364.72 184.5 375.56 224.91C391.36 283.8 361.94 344.14 308.56 369.17L320.09 412.16C390.25 383.21 432.4 310.3 422.43 235.14L464.41 223.91C468.91 252.62 467.35 281.16 460.55 308.07L503.16 323.56Z" fill="currentColor"/>
                <path d="M321.99 504.22C185.27 540.8 44.7501 459.77 8.11011 323.24C3.84011 307.31 1.17 291.33 0 275.46H43.27C44.36 287.37 46.4699 299.35 49.6799 311.29C53.0399 323.8 57.45 335.75 62.79 347.07L101.38 323.92C98.1299 316.42 95.39 308.6 93.21 300.47C69.17 210.87 122.41 118.77 212.13 94.7601C229.13 90.2101 246.23 88.4401 262.93 89.1501L255.19 133C244.73 133.05 234.11 134.42 223.53 137.25C157.31 154.98 118.01 222.95 135.75 289.09C136.85 293.16 138.13 297.13 139.59 300.99L188.94 271.38L174.07 231.95L220.67 184.08L279.57 171.39L296.62 192.38L269.47 219.88L245.79 227.33L228.87 244.72L237.16 267.79C237.16 267.79 253.95 285.63 253.98 285.64L277.7 279.33L294.58 260.79L331.44 249.12L342.42 273.82L304.39 320.45L240.66 340.63L212.08 308.81L162.26 338.7C187.8 367.78 226.2 383.93 266.01 380.56L277.54 423.55C218.13 431.41 160.1 406.82 124.05 361.64L85.6399 384.68C136.25 451.17 223.84 484.11 309.61 461.16C371.35 444.64 419.4 402.56 445.42 349.38L488.06 364.88C457.17 431.16 398.22 483.82 321.99 504.22Z" fill="currentColor"/>
                </svg>
            );
        case 'GitHub':
            return (
                <svg style={{...iconStyle, color: 'white'}} viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>
            );
        case 'Spigot':
            iconSrc = '/icons/spigot.png';
            return (
                <img src={iconSrc} alt={platform} style={iconStyle} />
            );
        case '':
            platform = 'Not Hosted';
            return (
                <svg style={{...iconStyle, color: 'red'}} viewBox="6 6 19 19" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5  c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4  C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/>
                </svg>
            )
        case undefined:
            platform = 'Unknown Platform';
            return (
                <svg style={{...iconStyle, color: 'red'}} viewBox="0 0 511 511" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
           <g>
               <path fill="currentColor" d="M396.138,85.295c-13.172-25.037-33.795-45.898-59.342-61.03C311.26,9.2,280.435,0.001,246.98,0.001
                   c-41.238-0.102-75.5,10.642-101.359,25.521c-25.962,14.826-37.156,32.088-37.156,32.088c-4.363,3.786-6.824,9.294-6.721,15.056
                   c0.118,5.77,2.775,11.186,7.273,14.784l35.933,28.78c7.324,5.864,17.806,5.644,24.875-0.518c0,0,4.414-7.978,18.247-15.88
                   c13.91-7.85,31.945-14.173,58.908-14.258c23.517-0.051,44.022,8.725,58.016,20.717c6.952,5.941,12.145,12.594,15.328,18.68
                   c3.208,6.136,4.379,11.5,4.363,15.574c-0.068,13.766-2.742,22.77-6.603,30.442c-2.945,5.729-6.789,10.813-11.738,15.744
                   c-7.384,7.384-17.398,14.207-28.634,20.479c-11.245,6.348-23.365,11.932-35.612,18.68c-13.978,7.74-28.77,18.858-39.701,35.544
                   c-5.449,8.249-9.71,17.686-12.416,27.641c-2.742,9.964-3.98,20.412-3.98,31.071c0,11.372,0,20.708,0,20.708
                   c0,10.719,8.69,19.41,19.41,19.41h46.762c10.719,0,19.41-8.691,19.41-19.41c0,0,0-9.336,0-20.708c0-4.107,0.467-6.755,0.917-8.436
                   c0.773-2.512,1.206-3.14,2.47-4.668c1.29-1.452,3.895-3.674,8.698-6.331c7.019-3.946,18.298-9.276,31.07-16.176
                   c19.121-10.456,42.367-24.646,61.972-48.062c9.752-11.686,18.374-25.758,24.323-41.968c6.001-16.21,9.242-34.431,9.226-53.96
                   C410.243,120.761,404.879,101.971,396.138,85.295z"/>
               <path fill="currentColor" d="M228.809,406.44c-29.152,0-52.788,23.644-52.788,52.788c0,29.136,23.637,52.772,52.788,52.772
                   c29.136,0,52.763-23.636,52.763-52.772C281.572,430.084,257.945,406.44,228.809,406.44z"/>
           </g>
           </svg>
            );
    }
}

// Example usage within a component
type PluginProps = {
    p: string;
};

const Plugin: React.FC<PluginProps> = ({ p }) => {
    return (
        <>
            {createLinkElement(p)}
        </>
    );
};

export default Plugin;