export const complaintAddress = "0x0C51Ea7BB566D1D7362B5C8719fd5E24332578b8";

export const complaintAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
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
				"internalType": "address",
				"name": "newAdmin",
				"type": "address"
			}
		],
		"name": "changeAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
		"inputs": [],
		"name": "getAdmin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
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
