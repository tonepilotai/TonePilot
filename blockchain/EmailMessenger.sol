
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract EmailMessenger {
    struct Email {
        address sender;
        address recipient;
        string subject;
        string content;
        uint timestamp;
    }

    Email[] public emails;

    function sendEmail(address recipient, string memory subject, string memory content) public {
        emails.push(Email(msg.sender, recipient, subject, content, block.timestamp));
    }

    function getEmails() public view returns (Email[] memory) {
        return emails;
    }
}
