import { LendingProtocol } from './lending-protocol';
import { Portfolio } from 'src/protocol.portfolio';
import * as common from '@protocolink/common';
import { expect } from 'chai';
import { filterPortfolio } from 'src/protocol.utils';

describe('Test Spark LendingProtocol', function () {
  context('Test getPortfolio', function () {
    const testCases = [
      {
        chainId: common.ChainId.mainnet,
        account: '0x8bf7058bfe4cf0d1fdfd41f43816c5555c17431d',
        blockTag: 20150000,
        expected: {
          chainId: 1,
          protocolId: 'spark',
          marketId: 'mainnet',
          utilization: '0.79678822323883319484',
          healthRate: '1.27034397902718399131',
          netAPY: '-0.13536489433507799406',
          totalSupplyUSD: '2601932.82695974972973709827',
          totalBorrowUSD: '1700015.336027643795802814',
          supplies: [
            {
              token: {
                chainId: 1,
                address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                decimals: 18,
                symbol: 'DAI',
                name: 'Dai Stablecoin',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/DAI.png',
              },
              price: '1',
              balance: '0',
              apy: '0.08506539453004319342',
              lstApy: '0',
              grossApy: '0.08506539453004319342',
              usageAsCollateralEnabled: true,
              ltv: '0',
              liquidationThreshold: '0.0001',
              isNotCollateral: false,
              supplyCap: '0',
              totalSupply: '970979516.80904012484787946',
            },
            {
              token: {
                chainId: 1,
                address: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
                decimals: 18,
                symbol: 'sDAI',
                name: 'Savings Dai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/sDAI.svg',
              },
              price: '1.09090239',
              balance: '0',
              apy: '0',
              lstApy: '0.077',
              grossApy: '0.077',
              usageAsCollateralEnabled: true,
              ltv: '0.79',
              liquidationThreshold: '0.8',
              isNotCollateral: false,
              supplyCap: '57238691',
              totalSupply: '15820457.979376171851586115',
            },
            {
              token: {
                chainId: 1,
                address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                decimals: 6,
                symbol: 'USDC',
                name: 'USD Coin',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/USDC.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.06488613968469418005',
              lstApy: '0',
              grossApy: '0.06488613968469418005',
              usageAsCollateralEnabled: false,
              ltv: '0',
              liquidationThreshold: '0',
              isNotCollateral: false,
              supplyCap: '60000000',
              totalSupply: '2573573.982811',
            },
            {
              token: {
                chainId: 1,
                address: '0x0000000000000000000000000000000000000000',
                decimals: 18,
                symbol: 'ETH',
                name: 'Ethereum',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/ETH.png',
              },
              price: '3494.6068',
              balance: '744.556677151704085775',
              apy: '0.01188094252979843285',
              lstApy: '0',
              grossApy: '0.01188094252979843285',
              usageAsCollateralEnabled: true,
              ltv: '0.82',
              liquidationThreshold: '0.83',
              isNotCollateral: false,
              supplyCap: '392853',
              totalSupply: '242964.53151064801522744',
            },
            {
              token: {
                chainId: 1,
                address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
                decimals: 18,
                symbol: 'wstETH',
                name: 'Wrapped liquid staked Ether 2.0',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/wstETH.png',
              },
              price: '4090.63672006',
              balance: '0',
              apy: '0.00000018736689798449',
              lstApy: '0.0302',
              grossApy: '0.03020018736689798449',
              usageAsCollateralEnabled: true,
              ltv: '0.79',
              liquidationThreshold: '0.8',
              isNotCollateral: false,
              supplyCap: '559623',
              totalSupply: '518630.88531647902529718',
            },
            {
              token: {
                chainId: 1,
                address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
                decimals: 8,
                symbol: 'WBTC',
                name: 'Wrapped BTC',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/WBTC.svg',
              },
              price: '64268.87322622',
              balance: '0',
              apy: '0.00009490993643960992',
              lstApy: '0',
              grossApy: '0.00009490993643960992',
              usageAsCollateralEnabled: true,
              ltv: '0.74',
              liquidationThreshold: '0.75',
              isNotCollateral: false,
              supplyCap: '6050',
              totalSupply: '5574.61109955',
            },
            {
              token: {
                chainId: 1,
                address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
                decimals: 18,
                symbol: 'rETH',
                name: 'Rocket Pool ETH',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/rETH.svg',
              },
              price: '3876.74130142',
              balance: '0',
              apy: '0.00000347315814995589',
              lstApy: '0.0282',
              grossApy: '0.02820347315814995589',
              usageAsCollateralEnabled: true,
              ltv: '0.79',
              liquidationThreshold: '0.8',
              isNotCollateral: false,
              supplyCap: '48520',
              totalSupply: '39031.633141864210921579',
            },
            {
              token: {
                chainId: 1,
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                decimals: 6,
                symbol: 'USDT',
                name: 'Tether USD',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/USDT.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.17653029292621809349',
              lstApy: '0',
              grossApy: '0.17653029292621809349',
              usageAsCollateralEnabled: false,
              ltv: '0',
              liquidationThreshold: '0',
              isNotCollateral: false,
              supplyCap: '30000000',
              totalSupply: '231087.822426',
            },
            {
              token: {
                chainId: 1,
                address: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee',
                decimals: 18,
                symbol: 'weETH',
                name: 'Wrapped eETH',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/weETH.webp',
              },
              price: '3638.78762183',
              balance: '0',
              apy: '0',
              lstApy: '0',
              grossApy: '0',
              usageAsCollateralEnabled: false,
              ltv: '0.72',
              liquidationThreshold: '0.73',
              isNotCollateral: false,
              supplyCap: '7704',
              totalSupply: '2773.528693390597260508',
            },
          ],
          borrows: [
            {
              token: {
                chainId: 1,
                address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                decimals: 18,
                symbol: 'DAI',
                name: 'Dai Stablecoin',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/DAI.png',
              },
              price: '1',
              balance: '1700015.336027643795802814',
              apy: '0.08999999999999999998',
              lstApy: '0',
              grossApy: '0.08999999999999999998',
              borrowMin: '0',
              borrowCap: '0',
              totalBorrow: '920150499.78030561465224941',
            },
            {
              token: {
                chainId: 1,
                address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                decimals: 6,
                symbol: 'USDC',
                name: 'USD Coin',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/USDC.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.0809400739070207213',
              lstApy: '0',
              grossApy: '0.0809400739070207213',
              borrowMin: '0',
              borrowCap: '7677918',
              totalBorrow: '2191019.352047',
            },
            {
              token: {
                chainId: 1,
                address: '0x0000000000000000000000000000000000000000',
                decimals: 18,
                symbol: 'ETH',
                name: 'Ethereum',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/ETH.png',
              },
              price: '3494.6068',
              balance: '0',
              apy: '0.01875730304327349679',
              lstApy: '0',
              grossApy: '0.01875730304327349679',
              borrowMin: '0',
              borrowCap: '174706',
              totalBorrow: '162583.542147196213411733',
            },
            {
              token: {
                chainId: 1,
                address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
                decimals: 18,
                symbol: 'wstETH',
                name: 'Wrapped liquid staked Ether 2.0',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/wstETH.png',
              },
              price: '4090.63672006',
              balance: '0',
              apy: '0.0025119360225730149',
              lstApy: '0.0302',
              grossApy: '-0.0276880639774269851',
              borrowMin: '0',
              borrowCap: '142',
              totalBorrow: '45.568946461169606586',
            },
            {
              token: {
                chainId: 1,
                address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
                decimals: 8,
                symbol: 'WBTC',
                name: 'Wrapped BTC',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/WBTC.svg',
              },
              price: '64268.87322622',
              balance: '0',
              apy: '0.00199054407925222943',
              lstApy: '0',
              grossApy: '0.00199054407925222943',
              borrowMin: '0',
              borrowCap: '432',
              totalBorrow: '332.56624751',
            },
            {
              token: {
                chainId: 1,
                address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
                decimals: 18,
                symbol: 'rETH',
                name: 'Rocket Pool ETH',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/rETH.svg',
              },
              price: '3876.74130142',
              balance: '0',
              apy: '0.0027363392464678893',
              lstApy: '0.0282',
              grossApy: '-0.0254636607535321107',
              borrowMin: '0',
              borrowCap: '163',
              totalBorrow: '58.364826089291420047',
            },
            {
              token: {
                chainId: 1,
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                decimals: 6,
                symbol: 'USDT',
                name: 'Tether USD',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/USDT.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.19094817722008477749',
              lstApy: '0',
              grossApy: '0.19094817722008477749',
              borrowMin: '0',
              borrowCap: '3151044',
              totalBorrow: '226683.621566',
            },
            {
              token: {
                chainId: 1,
                address: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee',
                decimals: 18,
                symbol: 'weETH',
                name: 'Wrapped eETH',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/weETH.webp',
              },
              price: '3638.78762183',
              balance: '0',
              apy: '0.051271096334354555',
              lstApy: '0',
              grossApy: '0.051271096334354555',
              borrowMin: '0',
              borrowCap: '0',
              totalBorrow: '0',
            },
          ],
        },
      },
      {
        chainId: common.ChainId.gnosis,
        account: '0xed374ece52ab111bdbaee9f1013429f474c883ba',
        blockTag: 34670000,
        expected: {
          chainId: 100,
          protocolId: 'spark',
          marketId: 'gnosis',
          utilization: '1',
          healthRate: '66.22313042620073282914',
          netAPY: '0.06758674765709174823',
          totalSupplyUSD: '0.52479814300329596073120645',
          totalBorrowUSD: '0.00594352141579157858042094',
          supplies: [
            {
              token: {
                chainId: 100,
                address: '0x0000000000000000000000000000000000000000',
                decimals: 18,
                symbol: 'xDAI',
                name: 'xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/xDAI.svg',
              },
              price: '1',
              balance: '0.524797609259734908',
              apy: '0.06659314737760115447',
              lstApy: '0',
              grossApy: '0.06659314737760115447',
              usageAsCollateralEnabled: true,
              ltv: '0',
              liquidationThreshold: '0.75',
              isNotCollateral: false,
              supplyCap: '20000000',
              totalSupply: '5201978.747319461305417626',
            },
            {
              token: {
                chainId: 100,
                address: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
                decimals: 18,
                symbol: 'WETH',
                name: 'Wrapped Ether on xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/WETH.svg',
              },
              price: '3378.18992021',
              balance: '0',
              apy: '0.00143565389586164745',
              lstApy: '0',
              grossApy: '0.00143565389586164745',
              usageAsCollateralEnabled: true,
              ltv: '0.7',
              liquidationThreshold: '0.75',
              isNotCollateral: false,
              supplyCap: '5000',
              totalSupply: '1730.169232376271297257',
            },
            {
              token: {
                chainId: 100,
                address: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
                decimals: 18,
                symbol: 'wstETH',
                name: 'Wrapped liquid staked Ether 2.0 from Mainnet',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/wstETH.png',
              },
              price: '3955.65976923',
              balance: '0.000000000134931615',
              apy: '0.00000009164896877563',
              lstApy: '0.0302',
              grossApy: '0.03020009164896877563',
              usageAsCollateralEnabled: true,
              ltv: '0.65',
              liquidationThreshold: '0.725',
              isNotCollateral: false,
              supplyCap: '15000',
              totalSupply: '7045.636056469244191749',
            },
            {
              token: {
                chainId: 100,
                address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
                decimals: 18,
                symbol: 'GNO',
                name: 'Gnosis Token on xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/GNO.png',
              },
              price: '282.25735346',
              balance: '0',
              apy: '0',
              lstApy: '0',
              grossApy: '0',
              usageAsCollateralEnabled: false,
              ltv: '0.4',
              liquidationThreshold: '0.5',
              isNotCollateral: false,
              supplyCap: '100000',
              totalSupply: '50792.470631786130088309',
            },
            {
              token: {
                chainId: 100,
                address: '0xaf204776c7245bF4147c2612BF6e5972Ee483701',
                decimals: 18,
                symbol: 'sDAI',
                name: 'Savings xDAI ',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/sDAI.svg',
              },
              price: '1.09012557',
              balance: '0',
              apy: '0',
              lstApy: '0.1035',
              grossApy: '0.1035',
              usageAsCollateralEnabled: true,
              ltv: '0.7',
              liquidationThreshold: '0.75',
              isNotCollateral: false,
              supplyCap: '40000000',
              totalSupply: '2413060.464050747079318239',
            },
            {
              token: {
                chainId: 100,
                address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
                decimals: 6,
                symbol: 'USDC',
                name: 'USD//C on xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/USDC.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.04031825326941188248',
              lstApy: '0',
              grossApy: '0.04031825326941188248',
              usageAsCollateralEnabled: false,
              ltv: '0',
              liquidationThreshold: '0',
              isNotCollateral: false,
              supplyCap: '10000000',
              totalSupply: '875914.238229',
            },
            {
              token: {
                chainId: 100,
                address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
                decimals: 6,
                symbol: 'USDT',
                name: 'Tether on xDai',
                logoUri: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
              },
              price: '1',
              balance: '0',
              apy: '0.04973581219793704575',
              lstApy: '0',
              grossApy: '0.04973581219793704575',
              usageAsCollateralEnabled: false,
              ltv: '0',
              liquidationThreshold: '0',
              isNotCollateral: false,
              supplyCap: '10000000',
              totalSupply: '501494.853783',
            },
            {
              token: {
                chainId: 100,
                address: '0xcB444e90D8198415266c6a2724b7900fb12FC56E',
                decimals: 18,
                symbol: 'EURe',
                name: 'Monerium EUR emoney',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/EURe.svg',
              },
              price: '1.06821',
              balance: '0',
              apy: '0.04272023504573387169',
              lstApy: '0',
              grossApy: '0.04272023504573387169',
              usageAsCollateralEnabled: false,
              ltv: '0',
              liquidationThreshold: '0',
              isNotCollateral: false,
              supplyCap: '5000000',
              totalSupply: '514539.854324959728001926',
            },
          ],
          borrows: [
            {
              token: {
                chainId: 100,
                address: '0x0000000000000000000000000000000000000000',
                decimals: 18,
                symbol: 'xDAI',
                name: 'xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/xDAI.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.08348389047388561465',
              lstApy: '0',
              grossApy: '0.08348389047388561465',
              borrowMin: '0',
              borrowCap: '16000000',
              totalBorrow: '4405872.903221623929093855',
            },
            {
              token: {
                chainId: 100,
                address: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
                decimals: 18,
                symbol: 'WETH',
                name: 'Wrapped Ether on xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/WETH.svg',
              },
              price: '3378.18992021',
              balance: '0',
              apy: '0.0070828223259550443',
              lstApy: '0',
              grossApy: '0.0070828223259550443',
              borrowMin: '0',
              borrowCap: '3000',
              totalBorrow: '390.838016814541498549',
            },
            {
              token: {
                chainId: 100,
                address: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
                decimals: 18,
                symbol: 'wstETH',
                name: 'Wrapped liquid staked Ether 2.0 from Mainnet',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/wstETH.png',
              },
              price: '3955.65976923',
              balance: '0.000001502536052778',
              apy: '0.01005104862555524841',
              lstApy: '0.0302',
              grossApy: '-0.02014895137444475159',
              borrowMin: '0',
              borrowCap: '100',
              totalBorrow: '0.092239536518913207',
            },
            {
              token: {
                chainId: 100,
                address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
                decimals: 6,
                symbol: 'USDC',
                name: 'USD//C on xDai',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/USDC.svg',
              },
              price: '1',
              balance: '0',
              apy: '0.06662932421477983648',
              lstApy: '0',
              grossApy: '0.06662932421477983648',
              borrowMin: '0',
              borrowCap: '8000000',
              totalBorrow: '596606.15362',
            },
            {
              token: {
                chainId: 100,
                address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
                decimals: 6,
                symbol: 'USDT',
                name: 'Tether on xDai',
                logoUri: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
              },
              price: '1',
              balance: '0',
              apy: '0.07409612776044139288',
              lstApy: '0',
              grossApy: '0.07409612776044139288',
              borrowMin: '0',
              borrowCap: '8000000',
              totalBorrow: '378507.507327',
            },
            {
              token: {
                chainId: 100,
                address: '0xcB444e90D8198415266c6a2724b7900fb12FC56E',
                decimals: 18,
                symbol: 'EURe',
                name: 'Monerium EUR emoney',
                logoUri: 'https://cdn.furucombo.app/assets/img/token/EURe.svg',
              },
              price: '1.06821',
              balance: '0',
              apy: '0.0507043847775819476',
              lstApy: '0',
              grossApy: '0.0507043847775819476',
              borrowMin: '0',
              borrowCap: '4000000',
              totalBorrow: '483682.456791976017259709',
            },
          ],
        },
      },
    ];

    testCases.forEach(({ chainId, account, blockTag, expected }) => {
      it(`${common.toNetworkId(chainId)} market with blockTag ${blockTag}`, async function () {
        const protocol = await LendingProtocol.createProtocol(chainId);

        protocol.setBlockTag(blockTag);
        const _portfolio = await protocol.getPortfolio(account);
        const portfolio: Portfolio = JSON.parse(JSON.stringify(_portfolio));

        const filteredPortfolio = filterPortfolio(portfolio);
        const filteredExpected = filterPortfolio(expected);

        expect(filteredPortfolio).to.deep.equal(filteredExpected);
      }).timeout(30000);
    });
  });
});
