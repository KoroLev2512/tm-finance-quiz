'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { LanguageSwitcher } from '../../shared/components/LanguageSwitcher';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link href="/" className="logo">
            <LogoIcon />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <LanguageSwitcher />
            <button className="menu-button" onClick={toggleMenu}>
              <BurgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-overlay" onClick={closeMenu}></div>
        <div className="menu-panel">
          <button className="close-button" onClick={closeMenu}>
            <CloseIcon/>
          </button>
          <nav className="menu-nav">
            <Link href="/privacy" className="menu-item">{t.menu.privacy}</Link>
            <Link href="/cookies" className="menu-item">{t.menu.cookies}</Link>
            <Link href="/contact" className="menu-item">{t.menu.contact}</Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="policy-section">
          <div className="policy-container">
            <div className="policy-content">
              <div className="back-button-container">
                <Link href="/" className="back-button">
                  <ArrowBackIcon />
                  <span>{t.privacyPage.back}</span>
                </Link>
              </div>
              
              <h1 className="policy-title">{t.privacyPage.title}</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <h2 className="policy-section-title">Preamble</h2>
                  <p className="policy-text">
                    This policy on the processing of personal data has been drafted in accordance with the requirements of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (GDPR) and Organic Law 3/2018, of 5 December, on the Protection of Personal Data and guarantee of digital rights (LOPDGDD). It defines the procedure for processing personal data and the measures to ensure their security, implemented by UMF Global Services Ltd. (hereinafter, the Operator).
                  </p>
                  <p className="policy-text">
                    1.1. The Operator&apos;s most important goal and condition for carrying out its activities is respect for the rights and freedoms of individuals when processing their personal data, including the protection of the rights to privacy, personal and family secrets.
                  </p>
                  <p className="policy-text">
                    1.2. This Operator&apos;s policy regarding the processing of personal data (hereinafter, the Policy) applies to all information that the Operator may receive about visitors to the website https://umfinance.pro.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">2. Basic Concepts Used in the Policy</h2>
                  <p className="policy-text">
                    2.1. Automated processing of personal data: processing of personal data using computer equipment.
                  </p>
                  <p className="policy-text">
                    2.2. Blocking of personal data: temporary cessation of processing of personal data (except when processing is necessary to clarify personal data).
                  </p>
                  <p className="policy-text">
                    2.3. Website: a set of graphical and informational materials, as well as computer programs and databases that ensure their availability on the Internet at the network address https://umfinance.pro.
                  </p>
                  <p className="policy-text">
                    2.4. Personal data information system: a set of personal data contained in databases and the information technologies and technical means that ensure their processing.
                  </p>
                  <p className="policy-text">
                    2.5. Anonymization of personal data: actions that make it impossible to determine, without additional information, the attribution of personal data to a specific User or other subject of personal data.
                  </p>
                  <p className="policy-text">
                    2.6. Processing of personal data: any action (operation) or set of actions (operations) performed with or without the use of automation tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), anonymization, blocking, deletion, destruction of personal data.
                  </p>
                  <p className="policy-text">
                    2.7. Operator: a state body, municipal body, legal entity or individual, independently or jointly with others, organizing and/or carrying out the processing of personal data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, and the actions (operations) performed with personal data.
                  </p>
                  <p className="policy-text">
                    2.8. Personal data: any information relating directly or indirectly to a specific or identifiable User of the website https://umfinance.pro.
                  </p>
                  <p className="policy-text">
                    2.9. Personal data permitted by the data subject for dissemination: personal data to which an unlimited number of persons have been granted access by the data subject by giving consent to the processing of personal data permitted by the data subject for dissemination in the manner prescribed by law (hereinafter, personal data permitted for dissemination).
                  </p>
                  <p className="policy-text">
                    2.10. User: any visitor to the website https://umfinance.pro.
                  </p>
                  <p className="policy-text">
                    2.11. Provision of personal data: actions aimed at disclosing personal data to a specific person or a specific circle of persons.
                  </p>
                  <p className="policy-text">
                    2.12. Dissemination of personal data: any actions aimed at disclosing personal data to an indefinite circle of persons (transfer of personal data) or at making personal data known to an unlimited circle of persons, including the publication of personal data in the mass media, posting in information and telecommunication networks, or providing access to personal data in any other way.
                  </p>
                  <p className="policy-text">
                    2.13. Cross-border transfer of personal data: the transfer of personal data to the territory of a foreign state to an authority of a foreign state, a foreign individual, or a foreign legal entity.
                  </p>
                  <p className="policy-text">
                    2.14. Destruction of personal data: any actions as a result of which personal data are destroyed irrevocably with the impossibility of further restoring the content of personal data in the personal data information system and/or the material carriers of personal data are destroyed.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">3. Basic Rights and Obligations of the Operator</h2>
                  <p className="policy-text">
                    <strong>3.1. The Operator has the right to:</strong>
                  </p>
                  <p className="policy-text">
                    — Receive from the data subject reliable information and/or documents containing personal data;
                  </p>
                  <p className="policy-text">
                    — Continue processing personal data without the data subject&apos;s consent in cases provided for by the GDPR;
                  </p>
                  <p className="policy-text">
                    — Independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of obligations provided for by the GDPR and applicable regulations.
                  </p>
                  <p className="policy-text">
                    <strong>3.2. The Operator is obliged to:</strong>
                  </p>
                  <p className="policy-text">
                    — Provide the data subject, upon his/her request, with information concerning the processing of his/her personal data;
                  </p>
                  <p className="policy-text">
                    — Organize the processing of personal data in accordance with the procedure established by current legislation;
                  </p>
                  <p className="policy-text">
                    — Respond to appeals and requests from data subjects and their legal representatives in accordance with the requirements of the GDPR;
                  </p>
                  <p className="policy-text">
                    — Publish or otherwise ensure unrestricted access to this Policy on the processing of personal data;
                  </p>
                  <p className="policy-text">
                    — Take legal, organizational, and technical measures to protect personal data from unlawful or accidental access, destruction, modification, blocking, copying, provision, distribution, as well as from other unlawful actions in relation to personal data;
                  </p>
                  <p className="policy-text">
                    — Cease the transfer, processing, and destroy personal data in the manner and cases provided for by the GDPR;
                  </p>
                  <p className="policy-text">
                    — Perform other duties provided for by the GDPR.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">4. Basic Rights and Obligations of Data Subjects</h2>
                  <p className="policy-text">
                    <strong>4.1. Data subjects have the right to:</strong>
                  </p>
                  <p className="policy-text">
                    — Obtain information regarding the processing of their personal data, except in cases provided for by law. The information is provided to the data subject by the Operator in an accessible form;
                  </p>
                  <p className="policy-text">
                    — Require the Operator to clarify, block, or destroy their personal data if the data is incomplete, outdated, inaccurate, illegally obtained, or not necessary for the stated purpose of processing, as well as take legal measures to protect their rights;
                  </p>
                  <p className="policy-text">
                    — Impose the condition of prior consent for the processing of personal data for the purpose of promoting goods, works, and services on the market;
                  </p>
                  <p className="policy-text">
                    — Withdraw consent to the processing of personal data, as well as submit a demand to cease the processing of personal data;
                  </p>
                  <p className="policy-text">
                    — Appeal to the competent supervisory authority (Spanish Data Protection Agency) or in court the unlawful actions or inaction of the Operator in the processing of their personal data;
                  </p>
                  <p className="policy-text">
                    — Exercise other rights provided for by law.
                  </p>
                  <p className="policy-text">
                    <strong>4.2. Data subjects are obliged to:</strong>
                  </p>
                  <p className="policy-text">
                    — Provide the Operator with reliable data about themselves;
                  </p>
                  <p className="policy-text">
                    — Inform the Operator about the updating of their personal data.
                  </p>
                  <p className="policy-text">
                    4.3. Persons who have provided the Operator with false information about themselves, or information about another data subject without the latter&apos;s consent, shall be liable in accordance with the law.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">5. Principles of Personal Data Processing</h2>
                  <p className="policy-text">
                    5.1. The processing of personal data is carried out on a lawful and fair basis.
                  </p>
                  <p className="policy-text">
                    5.2. The processing of personal data is limited to the achievement of specific, predetermined, and legitimate purposes. Processing of personal data that is incompatible with the purposes of collecting personal data is not allowed.
                  </p>
                  <p className="policy-text">
                    5.3. The combination of databases containing personal data processed for incompatible purposes is not allowed.
                  </p>
                  <p className="policy-text">
                    5.4. Only personal data that meets the purposes of their processing are subject to processing.
                  </p>
                  <p className="policy-text">
                    5.5. The content and volume of processed personal data correspond to the stated purposes of processing. Redundancy of processed personal data in relation to the stated purposes of their processing is not allowed.
                  </p>
                  <p className="policy-text">
                    5.6. The accuracy of personal data, their sufficiency, and, where necessary, relevance in relation to the purposes of processing personal data are ensured during processing. The Operator takes necessary measures and/or ensures their adoption to delete or clarify incomplete or inaccurate data.
                  </p>
                  <p className="policy-text">
                    5.7. The storage of personal data is carried out in a form that allows identification of the data subject, no longer than required by the purposes of processing personal data, unless the storage period is established by federal law or an agreement to which the data subject is a party.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">6. Purposes of Personal Data Processing</h2>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>Processing Purpose</td>
                        <td style={{ padding: '0.75rem' }}>Informing the User by sending emails</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>Personal data</td>
                        <td style={{ padding: '0.75rem' }}>
                          • Email address<br />
                          • Last name and first name
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>Legal basis</td>
                        <td style={{ padding: '0.75rem' }}>GDPR and the User&apos;s consent.</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>Types of processing</td>
                        <td style={{ padding: '0.75rem' }}>Sending informational emails to the email address.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">7. Conditions for Personal Data Processing</h2>
                  <p className="policy-text">
                    7.1. The processing of personal data is carried out with the consent of the data subject to the processing of his/her personal data.
                  </p>
                  <p className="policy-text">
                    7.2. Processing is necessary for compliance with a legal obligation applicable to the Operator.
                  </p>
                  <p className="policy-text">
                    7.3. Processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.
                  </p>
                  <p className="policy-text">
                    7.4. Processing is necessary for the purposes of the legitimate interests pursued by the Operator or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject.
                  </p>
                  <p className="policy-text">
                    7.5. Processing relates to personal data which are manifestly made public by the data subject.
                  </p>
                  <p className="policy-text">
                    7.6. Processing is necessary for the establishment, exercise or defense of legal claims.
                  </p>
                  <p className="policy-text">
                    7.7. Processing is necessary for reasons of public interest.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">8. Procedure for Collection, Storage, Transfer, and Other Types of Personal Data Processing</h2>
                  <p className="policy-text">
                    The security of personal data processed by the Operator is ensured through the implementation of legal, organizational, and technical measures necessary to fully comply with the requirements of current data protection legislation.
                  </p>
                  <p className="policy-text">
                    8.1. The Operator ensures the confidentiality of personal data and takes all possible measures to prevent unauthorized access to personal data.
                  </p>
                  <p className="policy-text">
                    8.2. The User&apos;s personal data will never, under any circumstances, be transferred to third parties, except in cases related to the execution of current legislation or if the data subject has given consent to the Operator to transfer the data to a third party to fulfill obligations under a civil law contract.
                  </p>
                  <p className="policy-text">
                    8.3. In case inaccuracies in personal data are identified, the User can update them independently by sending a notification to the Operator&apos;s email address privacy@umfinance.com with the subject &quot;Update of personal data&quot;.
                  </p>
                  <p className="policy-text">
                    8.4. The period for processing personal data is determined by the achievement of the purposes for which the personal data were collected, unless a different period is provided for by the contract or current legislation.
                    The User may at any time withdraw his/her consent to the processing of personal data by sending a notification to the Operator via email to privacy@umfinance.com with the subject &quot;Withdrawal of consent to the processing of personal data&quot;.
                  </p>
                  <p className="policy-text">
                    8.5. All information collected by third-party services, including payment systems, communication tools, and other service providers, is stored and processed by the specified persons (Operators) in accordance with their User Agreement and Privacy Policy. The Operator is not responsible for the actions of third parties, including the service providers mentioned in this clause.
                  </p>
                  <p className="policy-text">
                    8.6. The Operator, when processing personal data, ensures their confidentiality.
                  </p>
                  <p className="policy-text">
                    8.7. The Operator stores personal data in a form that allows identification of the data subject, no longer than required by the purposes of processing personal data.
                  </p>
                  <p className="policy-text">
                    8.8. The condition for terminating the processing of personal data may be the achievement of the processing purposes, expiration of the data subject&apos;s consent, withdrawal of consent by the data subject, or a request to cease processing of personal data, as well as the identification of unlawful processing of personal data.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">9. List of Actions Performed by the Operator with the Received Personal Data</h2>
                  <p className="policy-text">
                    9.1. The Operator performs collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), anonymization, blocking, deletion, and destruction of personal data.
                  </p>
                  <p className="policy-text">
                    9.2. The Operator performs automated processing of personal data with the receipt and/or transmission of the obtained information via information and telecommunication networks or without it.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">10. Cross-Border Transfer of Personal Data</h2>
                  <p className="policy-text">
                    10.1. Before commencing the cross-border transfer of personal data, the Operator must ensure that the foreign country to which the data will be transferred ensures an adequate level of protection in accordance with the GDPR.
                  </p>
                  <p className="policy-text">
                    10.2. Cross-border transfer of personal data to the territory of foreign countries that do not provide adequate protection can be carried out in cases expressly provided for by the GDPR.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">11. Confidentiality of Personal Data</h2>
                  <p className="policy-text">
                    The Operator and other persons who have gained access to personal data are obliged not to disclose to third parties and not to distribute personal data without the consent of the data subject, unless otherwise provided by federal law.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">12. Final Provisions</h2>
                  <p className="policy-text">
                    12.1. The User can obtain any clarifications on questions of interest regarding the processing of his/her personal data by contacting the Operator via email at privacy@umfinance.com.
                  </p>
                  <p className="policy-text">
                    12.2. This document will reflect any changes to the Operator&apos;s personal data processing policy. The Policy is valid indefinitely until replaced by a new version.
                  </p>
                  <p className="policy-text">
                    12.3. The current version of the Policy is freely available on the Internet at https://umfinance.pro/privacy/.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
