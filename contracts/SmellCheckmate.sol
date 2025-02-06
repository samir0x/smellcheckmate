// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Smell Checkmate
 * @dev A contract for managing hygiene ratings
 */
contract SmellCheckmate {
    // Mapping to store ratings for each user address
    mapping(address => uint) private ratings;

    /**
     * @dev Submit a hygiene rating for a user
     * @param _user The address of the user to rate
     * @param _rating The rating to assign (0-5)
     */
    function submitRating(address _user, uint _rating) public {
        require(_rating <= 5, "Rating must be between 0 and 5");
        ratings[_user] = _rating;
    }

    /**
     * @dev Retrieve the hygiene rating of a user
     * @param _user The address of the user to check
     * @return The rating of the user
     */
    function getRating(address _user) public view returns (uint) {
        return ratings[_user];
    }
}