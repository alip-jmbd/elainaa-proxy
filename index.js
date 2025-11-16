import {
    performProxyFetch
} from './src/core.js';

async function gatepass(url, options = {}) {
    const response = await performProxyFetch(url, options);
    return response.text();
}

async function auto(url, options = {}) {
    const config = {
        region: 'us',
        retries: 2,
        ...options
    };
    let lastError = null;

    for (let i = 0; i <= config.retries; i++) {
        const randomServerId = Math.floor(Math.random() * 20) + 1;
        try {
            const response = await performProxyFetch(url, {
                region: config.region,
                serverId: randomServerId
            });
            return response.text();
        } catch (error) {
            lastError = error;
        }
    }
    throw new Error(`Failed after ${config.retries} retries. Last error: ${lastError.message}`);
}

function createGatePass(config) {
    return {
        async fetch(url, options = {}) {
            const mergedOptions = { ...config,
                ...options
            };
            const response = await performProxyFetch(url, mergedOptions);
            return response.text();
        },
    };
}

function createProxyFetch(config) {
    return async function proxyFetch(url, fetchOptions = {}) {
        const mergedOptions = { ...config,
            ...fetchOptions
        };
        return performProxyFetch(url, mergedOptions);
    };
}

gatepass.auto = auto;

export default gatepass;
export {
    createGatePass,
    createProxyFetch
};
