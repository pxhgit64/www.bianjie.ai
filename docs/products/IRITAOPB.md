---
isIritaOpb: true
pageTitle: 基于智能合约的许可开放链-IRITA OPB
subTitle: 符合中国监管合规要求 · 成熟公链底层技术框架 · 基于智能合约的许可开放链
section: [
    {
        content: IRITA OPB是边界智能在BSN环境中部署的一条基于智能合约的许可区块链。IRITA OPB基于边界智能的IRISnet公链底层技术，既利用了公链的成熟技术框架，又满足了中国市场的监管要求。提供对节点部署的许可控制，并取消使用 Token 支付 Gas 的机制，能更好的满足中小企业以更具成本效益的方式快速开发和部署 DApp 的需求。
    }
]
change: {
    title: 相对于公链IRISnet而言，IRITA OPB主要的变化包括以下几个方面：,
    list: [
        {
            iconName: iconjiedianzhunrukongzhi,
            title: 节点准入控制,
            content: IRITA OPB基于信任BSN根CA统一颁发的节点身份证书，结合节点标识白名单列表，在节点间TLS通信时进行节点身份认证。
        },
        {
            iconName: iconziyuanguanli,
            title: 资源管理,
            content: 为了满足中国监管方的要求，IRITA OPB虽然暴露了通证功能，但只是为了支持对链上交易处理消耗的计算和存储资源进行统计和结算的GAS计数机制，通证仅用于GAS定价和扣除交易费用，而不作为一个数字货币进行交易。
        },
        {
            iconName: iconduozhinengheyue,
            title: 多智能合约,
            content: IRITA OPB既支持以Solidity语言为核心的EVM虚拟机，也支持Cosmwasm等多种智能合约，便于开发者根据自己的基础进行有针对性的选择。
        },
        {
            iconName: iconIDEzhichi,
            title: IDE支持,
            content: IRITA OPB提供了多种IDE环境，支持不同类型智能合约，便于开发者快速地搭建智能合约开发环境，进行合约开发、编译、调试、测试和发布部署
        }
    ]
}
example: {
    title: IRITA OPB智能合约示例,
    list: [
        {
            title: CosmWasm智能合约示例,
            link: https://github.com/CosmWasm/cosmwasm-examples
        },
        {
            title: EVM NFT智能合约示例,
            link: https://github.com/bianjieai/bsnhub-service-relayer/blob/master/test-consumers/bcos/NFTServiceConsumer/NFTServiceConsumer.sol
        }
    ]
}
--- 
