export const SEND_EMAIL = 'SEND_EMAIL';
export const EMAIL_SUCCEEDED = 'EMAIL_SUCCEEDED';
export const EMAIL_REJECTED = 'EMAIL_REJECTED';

const createAction = <T extends string>(type: T) => {
    const actionCreator = <T extends unknown>(payload: T) => ({type, payload});
    actionCreator.toString = () => type;
    return actionCreator;
};

export const createEmail = createAction(SEND_EMAIL);
const createSendAction = createEmail<Record<string, unknown>>({});
export type SendEmail = typeof createSendAction;