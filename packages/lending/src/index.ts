// TODO: BOOOB
import * as api from '@protocolink/api';

api.init({ baseURL: 'https://api-beta.protocolink.com' });

export * as adapter from './adapter';
export * as protocol from './protocol';
export * as protocols from './protocols';

export * as adapterType from './adapter.type';
export * as protocolType from './protocol.type';

export * as protocolPortfolio from './protocol.portfolio';
