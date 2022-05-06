import { IServerResponse } from './server';

export type ISmokeAutomationsResponse = IServerResponse<{
	screenshots: string[];
}>;
