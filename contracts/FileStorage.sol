// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract FileStorage {
    struct File {
        string name;
        string path;
        uint256 size;
        bool isFavorite;
        uint256 id;
        uint256 uploadedAt;
        address owner;
    }

    struct NFT {
        File file;
        address ownership;
        string description;
        string external_url;
        Rarity rarity;
    }

    struct Photo {
        File file;
        string description;
    }

    struct Audio {
        File file;
        Rating rating;
    }

    struct Video {
        File file;
        Rating rating;
    }

    struct Document {
        File file;
    }

    enum Rarity {
        COMMON,
        UNCOMMON,
        RARE,
        SPECIAL_EDITION,
        LEGENDARY,
        EXCLUSIVE,
        UNIQUE
    }

    enum Rating {
        ONE_STAR,
        TWO_STARS,
        THREE_STARS,
        FOUR_STARS,
        FIVE_STARS
    }

    /*========================= CONTRACT STATE =========================*/
    mapping(address => NFT[]) public nfts;
    mapping(address => Photo[]) public photos;
    mapping(address => Audio[]) public audios;
    mapping(address => Video[]) public videos;
    mapping(address => Document[]) public documents;

    /*============================ EVENTS ============================*/
    event NFTStored(NFT nft);
    event NFTRemoved(NFT nft);
    event PhotoStored(Photo photo);
    event PhotoRemoved(Photo photo);
    event AudioStored(Audio audio);
    event AudioRemoved(Audio audio);
    event VideoStored(Video video);
    event VideoRemoved(Video video);
    event DocumentStored(Document document);
    event DocumentRemoved(Document document);

    /*========================= PUBLIC API =========================*/
    function addNft(
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        address ownership,
        string memory description,
        string memory external_url,
        Rarity rarity
    ) public {
        uint256 id = nfts[msg.sender].length;
        NFT memory nft = NFT(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            ownership,
            description,
            external_url,
            rarity
        );
        nfts[msg.sender].push(nft);
        emit NFTStored(nft);
    }

    function getNft(uint256 id) public view returns (NFT memory) {
        return nfts[msg.sender][id];
    }

    function getNftByRarity(Rarity rarity) public view returns (NFT[] memory) {
        NFT[] memory array;
        for (uint256 i = 0; i < nfts[msg.sender].length; i++) {
            if (nfts[msg.sender][i].rarity == rarity) {
                array[i] = nfts[msg.sender][i];
            }
        }
        return array;
    }

    function getAllNfts() public view returns (NFT[] memory) {
        return nfts[msg.sender];
    }

    function updateNft(
        uint256 id,
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        address ownership,
        string memory description,
        string memory external_url,
        Rarity rarity
    ) public {
        NFT memory nft = NFT(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            ownership,
            description,
            external_url,
            rarity
        );
        nfts[msg.sender][id] = nft;
        emit NFTStored(nft);
    }

    function deleteNft(uint256 id) public {
        NFT memory nft = nfts[msg.sender][id];
        nfts[msg.sender][id] = nfts[msg.sender][nfts[msg.sender].length - 1];
        nfts[msg.sender].pop();
        emit NFTRemoved(nft);
    }

    /*========================= PUBLIC VIEWS =========================*/
    function addPhoto(
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        string memory description
    ) public {
        uint256 id = photos[msg.sender].length;

        Photo memory photo = Photo(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            description
        );

        photos[msg.sender].push(photo);
        emit PhotoStored(photo);
    }

    function getPhoto(uint256 id) public view returns (Photo memory) {
        return photos[msg.sender][id];
    }

    function getAllPhotos() public view returns (Photo[] memory) {
        return photos[msg.sender];
    }

    function updatePhoto(
        uint256 id,
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        string memory description
    ) public {
        Photo memory photo = Photo(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            description
        );

        photos[msg.sender][id] = photo;
        emit PhotoStored(photo);
    }

    function deletePhoto(uint256 id) public {
        Photo memory photo = photos[msg.sender][id];
        photos[msg.sender][id] = photos[msg.sender][
            photos[msg.sender].length - 1
        ];
        photos[msg.sender].pop();
        emit PhotoRemoved(photo);
    }

    function addAudio(
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        Rating rating
    ) public {
        uint256 id = audios[msg.sender].length;

        Audio memory audio = Audio(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            rating
        );

        audios[msg.sender].push(audio);
        emit AudioStored(audio);
    }

    function getAudio(uint256 id) public view returns (Audio memory) {
        return audios[msg.sender][id];
    }

    function getAllAudios() public view returns (Audio[] memory) {
        return audios[msg.sender];
    }

    function updateAudio(
        uint256 id,
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        Rating rating
    ) public {
        Audio memory audio = Audio(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            rating
        );

        audios[msg.sender][id] = audio;
        emit AudioStored(audio);
    }

    function deleteAudio(uint256 id) public {
        Audio memory audio = audios[msg.sender][id];
        audios[msg.sender][id] = audios[msg.sender][
            audios[msg.sender].length - 1
        ];
        audios[msg.sender].pop();
        emit AudioRemoved(audio);
    }

    function addVideo(
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        Rating rating
    ) public {
        uint256 id = videos[msg.sender].length;

        Video memory video = Video(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            rating
        );

        videos[msg.sender].push(video);
        emit VideoStored(video);
    }

    function getVideo(uint256 id) public view returns (Video memory) {
        return videos[msg.sender][id];
    }

    function getAllVideos() public view returns (Video[] memory) {
        return videos[msg.sender];
    }

    function updateVideo(
        uint256 id,
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite,
        Rating rating
    ) public {
        Video memory video = Video(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender),
            rating
        );

        videos[msg.sender][id] = video;
        emit VideoStored(video);
    }

    function deleteVideo(uint256 id) public {
        Video memory video = videos[msg.sender][id];
        videos[msg.sender][id] = videos[msg.sender][
            videos[msg.sender].length - 1
        ];
        videos[msg.sender].pop();
        emit VideoRemoved(video);
    }

    function addDocument(
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite
    ) public {
        uint256 id = documents[msg.sender].length;

        Document memory document = Document(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender)
        );

        documents[msg.sender].push(document);
        emit DocumentStored(document);
    }

    function getDocument(uint256 id) public view returns (Document memory) {
        return documents[msg.sender][id];
    }

    function getAllDocuments() public view returns (Document[] memory) {
        return documents[msg.sender];
    }

    function updateDocument(
        uint256 id,
        string memory name,
        string memory path,
        uint256 size,
        bool isFavorite
    ) public {
        Document memory document = Document(
            File(name, path, size, isFavorite, id, block.timestamp, msg.sender)
        );

        documents[msg.sender][id] = document;
        emit DocumentStored(document);
    }

    function deleteDocument(uint256 id) public {
        Document memory document = documents[msg.sender][id];

        documents[msg.sender][id] = documents[msg.sender][
            documents[msg.sender].length - 1
        ];
        documents[msg.sender].pop();

        emit DocumentRemoved(document);
    }

    /*========================= INTERNAL API =========================*/
}
