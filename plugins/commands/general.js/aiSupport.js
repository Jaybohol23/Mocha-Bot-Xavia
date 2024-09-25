import aiCommand from './ai.js';

function onCall({ message, args, getLang, data, userPermissions }) {
    const input = message.body.trim();

    if (input.toLowerCase().startsWith("ai")) {
        // Extract the command and pass it to the AI command script
        const newArgs = input.slice(2).trim().split(" ");
        aiCommand.onCall({
            message,
            args: newArgs,
            getLang,
            data,
            userPermissions,
            prefix: "ai"
        });
    }

    return;
}

export default {
    onCall
};