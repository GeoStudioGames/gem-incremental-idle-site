# Privacy Policy — Gem: Incremental Idle

Effective 26 November 2026

[Polski](./pl/) · [Request account deletion](https://geostudiogames.github.io/gem-incremental-idle-site/account-deletion/)

You can play **Gem: Incremental Idle** on Android without an account. Connecting a Google-linked game account to Cloud Save allows you to sync progress. In V22, joining the public Online Ranking is a separate, voluntary choice. Cloud Save works without joining the ranking. Rewarded ads are optional.

## 1. Controller and Contact

The data controller is **Jacek Kocemba, operating under the Geo Studio brand**.

**Postal address:** ul. Komandosów 23/63, 30-334 Kraków, Poland.

For support, account and privacy matters, contact **contact.geostudio@protonmail.com**. Jacek Kocemba handles correspondence personally and is the only person with access as a mailbox user.

## 2. Local Progress, Settings and Android Backups

The game stores progress, settings, statistics and timestamps on your device. It may create local save copies and information needed for recovery. These support progress preservation, preferences, offline progress calculations and save recovery.

When you play locally without using cloud synchronization, Geo Studio does not normally receive your progress files. This does not make those files anonymous. A link between your local save and game account may also be stored on the device, as described in section 3. Support materials you choose to send are covered by section 4.

**Progress synchronization uses Unity Cloud Save and Cloud Code.** Signing in alone is not permission to synchronize. Cloud synchronization requires a separate permission tied to the game account and local save.

Cloud processing includes the saved game state (progress, currencies, upgrades, achievements, statistics and gameplay timestamps), account and save identifiers, the device model, and synchronization metadata such as revisions, operation identifiers, confirmation times and integrity hashes. These are used to store and retrieve progress, associate it with the right account and handle conflicts and interrupted operations. The server stores progress in private Unity Cloud Save game data accessed through Cloud Code.

After cloud permission is granted, authorized startup, recovery and exit checks can still occur with **Cloud Sync OFF**. That setting disables periodic synchronization; it is not deletion or a switch that stops all cloud communication. Cloud Sync ON enables periodic checks. Downloading and replacing local progress requires your choice; cloud recovery is not guaranteed.

### Online rankings

In V22, open **Ranking → Join Ranking** to review the information about public visibility, then select **Join** to participate or **Cancel** to close that confirmation without joining. Signing in, opening the ranking and confirming a cloud save do not by themselves join you. You can use private Cloud Save without participating in the public ranking.

After you join, the service can update your public results automatically from confirmed cloud saves, including when the ranking screen is closed. Opening the ranking can also refresh results from an existing confirmed save. The private profile records your participation decision and associates the account with source save revisions, a public ranking identifier, a default or chosen nickname, ranking points, Energy, achievement counts and confirmation timestamps. Historical best points and first achievement confirmations can remain when current progress decreases.

Existing profiles that have not joined are excluded from public server tables; this does not erase their stored results, nickname or history. Joining can make those existing results visible again. Older copies already downloaded to other devices cannot be erased remotely.

Other players, including guests, can view the top 100 in each of three tables (All Time, Top Energy and Records). Signed-in players can also see their own position. Public entries carry a nickname, public ranking identifier, position, points, Energy, achievement counts and relevant timestamps. The public tables exclude your Google and Unity account identifiers and your full save. We collect your ranking nickname to display it in the tables. In Google Play Data safety, the player name is classified as collected and not shared with third-party organisations. Other players can see it after you join. Avoid personal information in your nickname. Older results may remain in a viewer’s local cache after server deletion. While running, the game expires cached tables after one hour, including offline. Server deletion cannot remotely erase copies on closed or backed-up devices.

Browsing rankings without Google sign-in uses a separate guest Unity Authentication identity. Guest session credentials are held in app memory. Merely viewing the tables as a guest does not create a public score. Section 7 explains how long the server identity can persist.

You can withdraw consent to public participation in **Ranking → Leave Ranking → Confirm Leave**. **Cancel** closes that confirmation without leaving. After the server confirms Leave, your profile is excluded from newly served public tables and **Join Ranking** becomes available again. The decision persists after restarting. Leave does not delete your account, private Cloud Save, local progress or stored private ranking profile and history. Signing in or syncing does not rejoin you. You can later confirm Join again, making retained results public again. Previously downloaded tables may still show an older entry until their cache expires; Leave cannot remotely erase those copies. Withdrawal does not affect the lawfulness of earlier processing based on consent. Account deletion is a separate process described in section 8.

Depending on the platform, device, account and settings, Android may copy, restore or transfer app data eligible for system backup, including progress, settings and local save copies. Google or another platform provider handles this; it does not give Geo Studio a copy. Recovery of every save is not guaranteed. See [Google's Android backup information](https://support.google.com/android/answer/2819582?hl=en).

Optional Unity Engine Diagnostics, Analytics, Crash Reporting and Performance Reporting are disabled in the described configuration. Local logs and manual bug reporting remain available. This does not disable account sign-in, advertising services, UMP communications or Android services, and does not mean the app makes no network connections.



### Legal bases for these services

We process data necessary to provide the game account and private Cloud Save you choose under **Article 6(1)(b) GDPR**. This covers only processing objectively necessary for those services, not public disclosure. Public ranking participation and publication rely on your separate consent under **Article 6(1)(a)**, which you can withdraw using Leave Ranking. Necessary security and abuse prevention rely on our legitimate interests under **Article 6(1)(f)**, taking your rights into account. Handling statutory GDPR obligations relies on **Article 6(1)(c)**. Advertising and correspondence have the bases described in sections 4–5. Withdrawing public-ranking consent does not withdraw your chosen private cloud service.

Separately, under **Article 6(1)(f)**, our legitimate interest is to preserve the continuity of your existing ranking profile without making you lose your nickname, recorded results or achievement priority when you leave public participation. We keep a limited private record linked to your game account: your ranking identifier and reserved nickname, best points, last recorded Energy and achievement counts, and the first-confirmation times and ordering needed to preserve results. This is not your full save or a record of every action. The participation decision and limited save-version and nickname-change metadata help enforce your choice and prevent stale updates and abuse. After Leave, the ranking service does not update your scores from subsequent cloud saves or publish your profile until you confirm Join again. Private retention is separate from consent to publication; it does not permit continued public use after withdrawal. You can object to this private retention as explained in section 9; section 7 gives its retention criteria.

## 3. Optional Google Sign-In and Your Game Account

If you choose **Sign In with Google**, Google authenticates you and the game uses Unity Authentication to create or recognize the linked game account and manage your session. This involves your Unity player identifier, Google account-link identifier and the credentials needed for sign-in and session management. The game passes the Google ID token to Unity Authentication to verify the sign-in. Depending on the Google permissions and profile information available, the token may also contain an email address, a name or a profile picture link. These fields are separate from the nickname and data shown in the public rankings. We do not receive your Google password.

Session data and a link between local progress and account identifiers may be stored on your device. The link helps identify which account is associated with the local save. The account link itself is not a cloud backup or permission to transfer or overwrite progress.

We need these identifiers to provide the account and sign-in service you choose. Local play remains available without an account. Advertising choices are made separately.

Signing out ends your sign-in session in the game; it does not delete your game account, Google account or local progress. It should not be treated as removing all local account links or backups. Section 8 explains how to request game-account deletion.

## 4. Support, Correspondence and Request Data

When you write to us, we receive your email address, message and attachments you choose to send. For account matters, we may process information needed to locate the profile and proportionately verify your authority over it, the request's scope, dates, handling outcome and necessary completion records. An email address or supplied player identifier alone does not prove authority over an account.

Support reporting does not automatically upload logs or save files. Opening an email draft does not send it or carry out the request. Send the message yourself and provide only information needed for the matter.

- Ordinary support, investigating problems and necessary follow-up rely on our legitimate interest in supporting the game — **Article 6(1)(f) GDPR**.
- Handling statutory GDPR rights and the necessary record of that handling rely on **Article 6(1)(c), together with Articles 12–22 GDPR**.
- Where retaining minimum information is necessary to establish, exercise or defend legal claims, the basis is our legitimate interest under **Article 6(1)(f) GDPR**, taking your rights into account.

**Do not send passwords, sign-in tokens, verification codes or private save files to prove account ownership.** Remove unnecessary personal data from screenshots and agree on the scope before sending technical materials. We do not retain unnecessary attachments.

## 5. Advertising and Privacy Choices

The game may offer optional rewarded ads through Unity LevelPlay, ironSource, Unity Ads and related advertising services. Availability depends on current required consent, technical conditions and ad availability. Google UMP presents and manages privacy choices; Google Mobile Ads is not the game's ad-serving system.

Open **Settings → Privacy preferences** to access available privacy options. When a form is shown, you can consent, refuse or select Manage options. **We do not make advertising requests without the required advertising consent. After refusal, we do not fall back to non-personalized ads.**

Ordinary gameplay and ordinary offline rewards remain available without advertising consent. Launching the game, signing in, pressing an ad button or reading the policy is not that consent. Withdrawal does not affect the lawfulness of earlier processing based on consent.

Personalized and other nonessential advertising processing relies on consent under **Article 6(1)(a) GDPR**, where applicable. Nonessential storage of or access to information on your device requires applicable prior consent under Polish electronic-communications law. Necessary handling of information to explain, record and respect privacy choices is separate and relies on applicable legal obligations — **Article 6(1)(c) GDPR**.

Advertising and privacy-choice providers may process IP addresses, approximate location derived from IP, device and app information, permitted device or advertising identifiers, technical diagnostics, ad impressions, clicks and privacy choices. Advertising partners use and share relevant data for ad delivery, measurement, fraud prevention and service operation. Unity Ads also reports collecting and sharing user identifiers for service operation and purchase history for advertising and analytics. Unity describes collection of app usage time as dependent on its ad optimisation setting. [Unity Ads Android SDK disclosure](https://docs.unity.com/en-us/ads-android/4.20.0/privacy/developer-consent/disclosures/google-data-safety)

The scope depends on the service, configuration and choices; not every category is always transmitted. UMP communications may occur before advertising consent. This does not authorize unrelated processing before a choice is made.

## 6. Providers, Recipients and Transfers

For Google Play Data safety, we declare the player name (ranking nickname) as collected. We declare seven other categories as both collected and shared: user IDs, purchase history, approximate location, diagnostics, app interactions, other actions, and device or other IDs. Purchase history is included because of the Unity Ads SDK disclosure described in section 5. The categories cover the game and its integrated services. Which data are processed depends on the feature you use and your privacy choices.

Depending on the feature used, data are received or processed by:

- **Google — sign-in:** authentication with your selected Google account under the applicable Google terms.
- **Unity Authentication, Cloud Save and Cloud Code:** game and guest identities, session management, private cloud progress and ranking processing. Unity services also receive technical information such as IP addresses when you use them. For this service Geo Studio is the controller and Unity processes data on its behalf under applicable terms and the data processing agreement. This differs from advertising-provider roles.
- **Google UMP, Unity LevelPlay, ironSource Mobile and Unity Ads:** privacy choices, mediation and advertising. Providers may act as independent controllers for advertising processing covered by their terms. These names do not list every further recipient.
- **Proton:** email for support and requests, including information related to delivering correspondence.
- **GitHub Pages:** hosting the game's information pages. When a page is visited, GitHub logs the visitor's IP address for security purposes, including without a GitHub account. The information pages are not a public database of player requests.
- **Google Play in-app updates:** Google Play uses device metadata, the game version and the installed modules and asset packs of the game to check whether an update is available and estimate its size. Google describes a fixed retention period for this information without stating its length. [Google Play update data](https://developer.android.com/guide/playcore/in-app-updates#data-safety)
- **Android platform providers, including Google where used:** system backups and other platform functions according to account and device settings.

See [Google's privacy policy](https://policies.google.com/privacy), [Unity's Authentication privacy information](https://docs.unity.com/en-us/authentication/privacy-and-consent/overview), [Unity's player privacy policy](https://unity.com/legal/game-player-and-app-user-privacy-policy), [Proton Mail's privacy policy](https://proton.me/mail/privacy-policy) and [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). A provider's role depends on the particular service and applicable terms.

Some providers may process data outside the European Economic Area. Applicable safeguards may include adequacy decisions or Standard Contractual Clauses. Transfer information is provided by [Google](https://policies.google.com/privacy/frameworks), the Unity and GitHub notices above, and [Proton's terms](https://proton.me/legal/dpa). Not every mechanism covers every transfer. Contact us or the provider for information on applicable safeguards and how to obtain a copy.

## 7. How Long Data Is Kept

| Category | Period or criterion |
| --- | --- |
| Local progress, settings, account links and save copies | Until overwritten or removed from the device. Signing out does not delete them. Clearing app data or uninstalling normally removes local files and may lose your progress. |
| Game account and Google link | While needed for the chosen account service. After verification, an administrator deletes the game account and its link as described in section 8. |
| Private cloud progress and sync records | The service keeps the current save across sessions and updates it as you sync. Closing the game, turning periodic sync off or signing out leaves it on the server. When the account is deleted, we remove its save content and account-specific transaction entries. |
| Ranking profile, nickname, scores and history | We keep the limited private record described in section 2 while your game account remains available and the record is needed to preserve continuity of that profile, including a return you choose. Leave ends public participation, not this private continuity. There is no automatic expiry after Leave. We assess continued need when handling your objection or erasure request and when the account, ranking service or purpose ends or materially changes; we remove data when that need ends, subject only to a separately justified retention requirement. Account deletion removes the profile and its history from the live ranking service. This is not permission to keep them indefinitely merely because a return is conceivable. |
| Guest ranking identity | Guest session credentials leave app memory when the process ends. By default Unity Authentication keeps a server identity until it is deleted. If you only browsed as a guest, describe this when contacting us so we can establish what can be identified. |
| Records that prevent deleted data from reappearing | Minimal private account-linked markers remain in Cloud Save and Ranking after deletion. They identify the deleted slot or profile and block stale writes or restoration. They contain no saved progress or ranking scores. Before an administrator can authorise their removal, we must verify that the old account is gone, old sessions and pending operations can no longer write, and controlled copies have expired or cannot restore erased data. We review these conditions at closure and before any restoration. There is no automatic expiry. |
| Moderated nicknames | The shared moderation list keeps blocked name text to prevent reuse. A name can remain blocked after its profile is deleted. |
| Session data and credentials | As needed for authentication and session management under the app and provider mechanisms. We do not retain them as evidence in a deletion matter. |
| Support and privacy correspondence | While handling the matter, then no longer than 12 months after closure, unless a legal obligation or necessary handling of legal claims requires longer. Attachments are deleted earlier when no longer needed. |
| Necessary records of rights handling and deletion | A limited record of the date, scope of the request, actions and outcome, only for as long as necessary to demonstrate compliance with a specific legal obligation or handle a specific legal claim. We determine the period according to that obligation or the applicable limitation periods and progress of the particular case. We assess need and scope when closing the matter and when the circumstances justifying further retention change. We delete the data when that need ends. This category does not preserve the whole account, complete correspondence or unnecessary attachments. |
| Android backups, advertising data and other provider-held data | Under applicable service, purpose, legal and user-setting rules; our 12-month correspondence limit does not automatically apply to them. |

We do not retain unnecessary data merely because a maximum period has not expired. We minimise verification material at closure. The administrator keeps a private plan, record of completed steps and verification evidence to complete or safely resume deletion and check its outcome. At closure and when circumstances change, we assess which evidence is still necessary to demonstrate compliance or handle a specific claim. Full technical evidence has no automatic expiry and must be minimised when no longer needed. If we retain particular data despite a deletion request, we explain the scope, purpose, basis and period or criterion. Uninstalling does not guarantee removal of platform backups. Unity’s internal technical backups are outside the live deletion procedure. We cannot confirm when a particular copy expires, and we do not use old snapshots to reinstate a deleted account. See [Unity Authentication retention](https://docs.unity.com/en-us/authentication/privacy-and-consent/overview), [Unity Cloud Save retention](https://docs.unity.com/en-us/cloud-save/privacy-and-consent/overview) and [Google's retention information](https://policies.google.com/technologies/retention) and the provider notices above.

## 8. Manual Deletion of the Game Account and Associated Data

**In the game.** While online and signed in to your linked account, open **Settings → Google Account → Delete Account**, then confirm **Request Deletion**. The request is registered for an administrator. To withdraw it before deletion starts, return to the same place and choose **Cancel Account Deletion**. You can check the pending request there after restarting the game.

**Without the game.** Email **[contact.geostudio@protonmail.com](mailto:contact.geostudio@protonmail.com?subject=Gem%3A%20Incremental%20Idle%20-%20account%20deletion)** and ask us to delete your Gem: Incremental Idle account and associated data. Mention if you lost access to the linked Google account. A player identifier, if known, can help locate the account. We accept the initial request without it. A sender address or player identifier alone does not prove ownership. We use proportionate verification and explain any further steps privately. [Account deletion instructions](https://geostudiogames.github.io/gem-incremental-idle-site/account-deletion/)

**What happens after verification.** An administrator removes the Unity Authentication game identity and Google link, private cloud save content, the live ranking profile including its public ID, current nickname reservation, scores and history, and the associated pending request and operational entries. We check the outcome and explain what remains. We retain the protective markers and necessary handling records described in section 7.

**Delete only your ranking profile (Ranking Only).** Email contact.geostudio@protonmail.com and say that you want to keep your game account and Cloud Save but delete your ranking profile. We verify that the profile is yours and confirm the scope with you. We ask you to close all game sessions and resolve any pending Join request before we proceed. An administrator then manually removes your profile from the live ranking service, including its nickname reservation, scores and ranking history, and checks the result. Your sign-in, private Cloud Save and local progress are preserved. Previously downloaded tables and provider backups are outside this procedure. You may later choose Join again to create a new profile. Your former nickname, scores and history are not guaranteed to return. Deleting your game account leaves your Google account intact. Device saves, cached tables on other devices, Android backups and Unity’s internal technical copies are outside the live service deletion. Clearing app storage can permanently remove local progress. Advertising providers may hold separate data under their own identifiers. We can help identify the provider and handle data under our control.

## 9. Your Rights

Within the GDPR's conditions, you may request access, rectification, erasure, restriction and, where applicable, portability. You may object to legitimate-interest processing on grounds relating to your situation. You may withdraw consent without affecting the lawfulness of earlier processing based on it.

**You may object specifically to retaining your private ranking profile after Leave**, without asking to delete your whole game account or Cloud Save. We will stop the processing unless we demonstrate compelling legitimate grounds overriding your interests, rights and freedoms, or the processing is needed for legal claims. You may request restriction while we verify the grounds. We assess the ranking request separately; using this right does not itself authorise deletion of your account or cloud progress. Leave already stops public participation without requiring an explanation.

Email **contact.geostudio@protonmail.com**. We request additional identifying information only where there are reasonable doubts and only in proportion to the request and risk. We do not routinely require identity documents. We do not ask for passwords, tokens or sign-in codes.

We inform you of the action taken on your request without undue delay and no later than one month after receiving it. If the complexity or number of requests justifies a GDPR extension of up to two further months, we inform you of the extension and its reasons within the first month. If we do not take action, we explain the reasons and the available complaint and judicial remedies without undue delay and no later than that first month. Handling is generally free, subject to statutory exceptions for manifestly unfounded or excessive requests.

We handle data under our control and cooperate with the appropriate providers. Justified legal exceptions to erasure remain valid. You may complain to the **President of the Polish Personal Data Protection Office (UODO)**; see [rights information](https://uodo.gov.pl/pl/493/155) and [complaint guidance](https://uodo.gov.pl/pl/526/2464).

## 10. Security

Data sent by the game to online services are encrypted in transit using HTTPS. Authentication and server-side access controls restrict access to private cloud data. Public ranking data is intentionally shared with ranking viewers. No transmission or storage system can guarantee absolute security.

## 11. Policy Changes

We update the policy when actual services or processing practices change. Where required, we communicate significant changes and their date before applying the changed practices. A policy update alone is not advertising consent or activation of progress synchronization.

Questions can be sent to **contact.geostudio@protonmail.com**.
