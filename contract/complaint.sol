pragma solidity ^0.8.17;

contract ComplaintContract {

    uint complaintCount = 0;

    mapping(uint => Complaint) ComplaintMap;

    event ComplaintCreated(
        uint id
    );

    struct Complaint {
        uint id;
        string name;
        string title;
        string location;
        string dateOfIncident;
        uint timeOfReporting;
        uint8 category;
        uint8 status;
        string description;
        string[] imageHash;
    }

    function getComplaintsList() public view returns (Complaint[] memory) {
        Complaint[] memory ret = new Complaint[](complaintCount+1);
        for (uint i = 0; i <= complaintCount; i++) {
            ret[i] = ComplaintMap[i];
        }
        return ret;
    }

    function getComplaintStatus(uint cId) public view returns (Complaint memory) {
        return ComplaintMap[cId];
    }

    function createComplaint(string memory name, string memory title, string memory location, string memory dateOfIncident, uint8 category, string memory description, string[] memory imageHash) public {
        complaintCount++;
        ComplaintMap[complaintCount].name = name;
        ComplaintMap[complaintCount].title = title;
        ComplaintMap[complaintCount].location = location;
        ComplaintMap[complaintCount].dateOfIncident = dateOfIncident;
        ComplaintMap[complaintCount].timeOfReporting = block.timestamp;
        ComplaintMap[complaintCount].category = category;
        ComplaintMap[complaintCount].status = 0;
        ComplaintMap[complaintCount].description = description;
        ComplaintMap[complaintCount].imageHash = imageHash;
        emit ComplaintCreated(complaintCount);
    }

}