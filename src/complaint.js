export const complaintAddress = "0xF5646342c3b5778bCAcA252d4Ee0316fC7fac6C1";

export const complaintAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ComplaintCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateOfIncident",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "category",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "imageHash",
				"type": "string[]"
			}
		],
		"name": "createComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cId",
				"type": "uint256"
			}
		],
		"name": "getComplaintStatus",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfIncident",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timeOfReporting",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "imageHash",
						"type": "string[]"
					}
				],
				"internalType": "struct ComplaintContract.Complaint",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getComplaintsList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateOfIncident",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timeOfReporting",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "imageHash",
						"type": "string[]"
					}
				],
				"internalType": "struct ComplaintContract.Complaint[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
