import React from 'react';
import css from '../styles/common.module.scss';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function Framework() {
    return (
        <div id="framework" className={css.frameworkSection}>
            <h1 className={css.frameworkSectionTitle}>Operational Framework</h1>
            <h5 className={css.frameworkSectionSubTitle}>
                The ConnectDeFi platform is powered by the Polkadot Network.
            </h5>
            <div className={css.frameworkSectionContent}>
                <div className={css.frameworkSectionContentPart1}>
                    <h3>Benefits of Building on the Polkadot Network </h3>
                    <div className={css.frameworkSectionContentPart1Headers}>
                        <div className={css.frameworkSectionContentPart1Icons}>
                            <CheckBoxIcon
                                className={css.frameworkSectionContentIcons}
                            />
                        </div>
                        <div className={css.frameworkSectionContentPart1Title}>
                            True Interoperability
                        </div>
                    </div>
                    <div className={css.frameworkSectionContentPart1Paragraph}>
                        <p>
                            {' '}
                            There are multiple methods to achieve
                            interoperability but Polkadot is unparalleled in
                            this area. The structure includes a central relay
                            chain that all individual blockchains connect to,
                            the parachains run in parallel, while also utilizing
                            bridges that connect to blockchains that do not use
                            Polkadot protocols.
                        </p>
                    </div>
                    <div className={css.frameworkSectionContentPart1Headers}>
                        <div className={css.frameworkSectionContentPart1Icons}>
                            <CheckBoxIcon
                                className={css.frameworkSectionContentIcons}
                            />
                        </div>
                        <div className={css.frameworkSectionContentPart1Title}>
                            Economic Scalability:
                        </div>
                    </div>
                    <div className={css.frameworkSectionContentPart1Paragraph}>
                        <p>
                            Polkadot achieves high scalability by enabling a
                            common set of validators to secure multiple
                            blockchains. This shared security strategy is
                            reliable compared to first generation smart contract
                            platforms such as Ethereum 1.0 that is prone to
                            significant network congestion and scaling
                            frictions.
                        </p>
                    </div>
                    <div className={css.frameworkSectionContentPart1Headers}>
                        <div className={css.frameworkSectionContentPart1Icons}>
                            <CheckBoxIcon
                                className={css.frameworkSectionContentIcons}
                            />
                        </div>
                        <div className={css.frameworkSectionContentPart1Title}>
                            Open-Source
                        </div>
                    </div>
                    <div className={css.frameworkSectionContentPart1Paragraph}>
                        <p>
                            Polkadot Network is powered by Substrate, an
                            open-source framework that allows for building
                            configurable blockchains in a minimal time.
                        </p>
                    </div>
                    <div className={css.frameworkSectionContentPart1Headers}>
                        <div className={css.frameworkSectionContentPart1Icons}>
                            <CheckBoxIcon
                                className={css.frameworkSectionContentIcons}
                            />
                        </div>
                        <div className={css.frameworkSectionContentPart1Title}>
                            Decentralized Governance
                        </div>
                    </div>
                    <div className={css.frameworkSectionContentPart1Paragraph}>
                        <p>
                            Polkadot’s governance is based on a Decentralized
                            Autonomous Organization (DAO), which democratically
                            confers on shareholders the rights to form a
                            consensus on critical decisions.
                        </p>
                    </div>
                </div>
                <div className={css.frameworkSectionContentPart2}>
                    <img
                        className={css.frameworkSectionContentPart2Img}
                        src="./polkadot_img.png"
                    />
                </div>
            </div>
        </div>
    );
}
