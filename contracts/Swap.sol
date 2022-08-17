// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenSwap {
    IERC20 token1;
    IERC20 token2;

    constructor(IERC20 _token1, IERC20 _token2) {
        token1 = IERC20(_token1);
        token2 = IERC20(_token2);
    }

    //swap function
    function swapToken(address trader1, address trader2, uint256 amount1, uint256 amount2) external {
        require(token1.allowance(trader1, address(this)) >= amount1, "Allowance for token one too low");
        require(token2.allowance(trader2, address(this)) >= amount2, "Allowance for token two too low");
        transferToken(token1, trader1, trader2, amount1);
        transferToken(token2, trader2, trader1, amount2);
    }

    function transferToken(IERC20 tokenToTransfer, address from, address to, uint256 amount) private {
        bool sent = tokenToTransfer.transferFrom(from, to, amount);
        require(sent, "Failed");
    }
}