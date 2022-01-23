import * as accounts from "./data-business";
import * as clientAccountsElement from "./account-business";

function getClientElement(client) {
    const allAccounts = accounts.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
        if (account.clientId === client.id) {
            clientAccounts.push(account);
        }
    }

    const node = getClientNode(client);
    const ul = clientAccountsElement.getClientAccountsElement(clientAccounts);

    node.appendChild(ul);

    return node;
}

function getClientNode(client) {
    const li = document.createElement("li");

    li.append(getFullName(client));

    return li;
}

function getFullName(client) {
    return client.first_name + " " + client.last_name;
}

export { getClientElement };