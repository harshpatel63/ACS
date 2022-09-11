export const complaintAddress = "0x9ddc7661D961Cbbe73750660B7D62B87d726bC61";

export const complaintAbi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "title",
                type: "string",
            },
            {
                internalType: "string",
                name: "location",
                type: "string",
            },
            {
                internalType: "string",
                name: "dateOfIncident",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "category",
                type: "uint8",
            },
            {
                internalType: "string",
                name: "description",
                type: "string",
            },
            {
                internalType: "string[]",
                name: "imageHash",
                type: "string[]",
            },
        ],
        name: "createComplaint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getComplaintsList",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "title",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "location",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "dateOfIncident",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timeOfReporting",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "category",
                        type: "uint8",
                    },
                    {
                        internalType: "uint8",
                        name: "status",
                        type: "uint8",
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                    {
                        internalType: "string[]",
                        name: "imageHash",
                        type: "string[]",
                    },
                ],
                internalType: "struct ComplaintContract.Complaint[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "cId",
                type: "uint256",
            },
        ],
        name: "getComplaintStatus",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "title",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "location",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "dateOfIncident",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timeOfReporting",
                        type: "uint256",
                    },
                    {
                        internalType: "uint8",
                        name: "category",
                        type: "uint8",
                    },
                    {
                        internalType: "uint8",
                        name: "status",
                        type: "uint8",
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                    {
                        internalType: "string[]",
                        name: "imageHash",
                        type: "string[]",
                    },
                ],
                internalType: "struct ComplaintContract.Complaint",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
