async function performProxyFetch(url, options = {}, signal) {
    const config = {
        region: 'us',
        serverId: 1,
        ...options
    };

    const {
        region,
        serverId
    } = config;
    const serverUrl = `https://${region}${serverId}.proxysite.com`;
    const processUrl = `${serverUrl}/includes/process.php?action=update`;

    const formData = new URLSearchParams({
        'server-option': `${region}${serverId}`,
        'd': url,
        'allowCookies': 'on'
    });

    const initialResponse = await fetch(processUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://www.proxysite.com',
            'Referer': 'https://www.proxysite.com/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
        },
        body: formData.toString(),
        redirect: 'manual',
        signal
    });

    if (initialResponse.status < 300 || initialResponse.status >= 400) {
        throw new Error(`Proxy server did not return a redirect. Status: ${initialResponse.status}`);
    }

    let redirectUrl = initialResponse.headers.get('location');
    if (!redirectUrl) {
        throw new Error('Proxy server did not provide a location header for redirect.');
    }

    if (!redirectUrl.startsWith('http')) {
        redirectUrl = serverUrl + redirectUrl;
    }

    const finalResponse = await fetch(redirectUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'Referer': 'https://www.proxysite.com/'
        },
        signal
    });

    if (!finalResponse.ok) {
        throw new Error(`Failed to fetch final content. Status: ${finalResponse.status}`);
    }

    return finalResponse;
}

export {
    performProxyFetch
};
