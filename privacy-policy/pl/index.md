# Polityka prywatności — Gem: Incremental Idle

Obowiązuje od 26 listopada 2026 r.

[English](../) · [Złóż wniosek o usunięcie konta](https://geostudiogames.github.io/gem-incremental-idle-site/account-deletion/pl/)

W **Gem: Incremental Idle** na Androidzie możesz grać bez konta. Połączenie konta gry powiązanego z Google z usługą Cloud Save umożliwia synchronizację postępu. W V22 udział w publicznym Rankingu Online wymaga odrębnego, dobrowolnego wyboru. Cloud Save działa także bez dołączenia do rankingu. Reklamy z nagrodą są opcjonalne.

## 1. Administrator i kontakt

Administratorem danych jest **Jacek Kocemba, działający pod marką Geo Studio**.

**Adres pocztowy:** ul. Komandosów 23/63, 30-334 Kraków, Polska.

Kontakt w sprawach pomocy, kont i prywatności: **contact.geostudio@protonmail.com**. Jacek Kocemba osobiście obsługuje korespondencję i jako jedyny ma dostęp do skrzynki w roli jej użytkownika.

## 2. Lokalny postęp, ustawienia i kopie Androida

Gra zapisuje na Twoim urządzeniu postęp, ustawienia, statystyki i znaczniki czasu. Może tworzyć lokalne kopie zapisu oraz informacje potrzebne do odzyskania danych. Służą one zachowaniu postępu, pamiętaniu preferencji, obliczaniu postępu offline i odzyskiwaniu zapisu.

Podczas zwykłej lokalnej rozgrywki Geo Studio co do zasady nie otrzymuje plików Twojego postępu. Nie oznacza to anonimowości tych plików. Na urządzeniu może też znajdować się powiązanie lokalnego zapisu z kontem gry, opisane w §3. Dobrowolnie przesłane materiały pomocy podlegają §4.

**Synchronizacja postępu korzysta z Unity Cloud Save i Cloud Code.** Wymaga potwierdzenia dla danego konta gry i lokalnego zapisu. Samo zalogowanie jej nie włącza.

W prywatnym zapisie przetwarzane są postęp, waluty, ulepszenia, osiągnięcia, statystyki, znaczniki czasu, identyfikatory konta i zapisu, model urządzenia oraz informacje o synchronizacji, w tym wersje zapisu, identyfikatory operacji, czasy potwierdzeń i skróty kontrolne. Te dane pozwalają odszukać poprawny zapis, odtworzyć postęp oraz obsłużyć konflikty i przerwane operacje. Dostęp do prywatnych danych Unity Cloud Save odbywa się przez Cloud Code.

Po włączeniu usługi ustawienie **Cloud Sync OFF** wyłącza okresowe sprawdzanie zapisu. Nadal możliwe są sprawdzenia przy uruchamianiu i zamykaniu gry oraz podczas odzyskiwania danych. **Cloud Sync ON** włącza sprawdzanie okresowe. Pobranie zapisu i zastąpienie nim lokalnego postępu wymaga Twojego wyboru. Odzyskanie danych nie zawsze jest możliwe.

### Ranking Online

W V22 otwórz **Ranking → Join Ranking**, przeczytaj informację o publicznej widoczności i wybierz **Join**, aby dołączyć, albo **Cancel**, aby zamknąć potwierdzenie bez dołączania. Samo logowanie, otwarcie rankingu lub potwierdzenie zapisu w chmurze nie oznacza dołączenia. Możesz korzystać z prywatnego Cloud Save bez udziału w publicznym rankingu.

Po dołączeniu usługa może automatycznie aktualizować publiczne wyniki na podstawie potwierdzonych zapisów w chmurze, również przy zamkniętym ekranie rankingu. Otwarcie rankingu może także odświeżyć wyniki z istniejącego potwierdzonego zapisu. Prywatny profil przechowuje decyzję o udziale i powiązanie konta z wersjami zapisu, publiczny identyfikator rankingu, domyślny lub wybrany pseudonim, punkty, energię, liczbę osiągnięć i czasy potwierdzeń. Najlepszy wynik punktowy i pierwsze potwierdzenia osiągnięć mogą pozostać w historii, gdy aktualny postęp spadnie.

Istniejące profile bez dołączenia są wyłączone z publicznych tabel serwera. Nie usuwa to zachowanych wyników, pseudonimu ani historii. Dołączenie może ponownie ujawnić te dotychczasowe wyniki. Kopii pobranych wcześniej na inne urządzenia nie można wymazać zdalnie.

Inni gracze, także goście, mogą zobaczyć po 100 najwyżej sklasyfikowanych graczy w trzech tabelach (All Time, Top Energy i Records). Zalogowany gracz może również sprawdzić własną pozycję. Publiczne wpisy zawierają pseudonim, publiczny identyfikator rankingu, pozycję, punkty, energię, liczbę osiągnięć i powiązane znaczniki czasu. Identyfikatory kont Google i Unity oraz pełny zapis gry pozostają prywatne. Zbieramy pseudonim gracza, aby wyświetlać go w tabelach. W sekcji Bezpieczeństwo danych Google Play nazwę gracza klasyfikujemy jako zbieraną i nieudostępnianą innym organizacjom. Po dołączeniu do rankingu pseudonim widzą inni gracze. Unikaj używania danych osobowych w pseudonimie. Po usunięciu danych z serwera starsze wyniki mogą pozostać w pamięci podręcznej urządzeń innych graczy. Uruchomiona gra wygasza tabelę w pamięci podręcznej po godzinie, również w trybie offline. Usunięcie danych z serwera nie usuwa zdalnie kopii na urządzeniu z zamkniętą grą ani w jego kopii zapasowej.

Przeglądanie rankingu bez logowania Google korzysta z odrębnej gościnnej tożsamości Unity Authentication. Poświadczenia sesji znajdują się w pamięci aplikacji. Samo przeglądanie tabel jako gość nie powoduje publikacji wyniku. Przechowywanie tożsamości na serwerze opisuje §7.

Zgodę na publiczny udział możesz wycofać przez **Ranking → Leave Ranking → Confirm Leave**. **Cancel** zamyka to potwierdzenie bez opuszczania rankingu. Po potwierdzeniu Leave przez serwer profil nie trafia do nowo udostępnianych publicznych tabel, a przycisk **Join Ranking** staje się ponownie dostępny. Decyzja pozostaje po restarcie. Leave nie usuwa konta, prywatnego Cloud Save, lokalnego postępu ani zachowanego prywatnego profilu i historii rankingu. Logowanie lub synchronizacja nie dołączają ponownie. Możesz później ponownie potwierdzić Join, ujawniając zachowane wyniki. Wcześniej pobrane tabele mogą nadal pokazywać starszy wpis do wygaśnięcia cache; Leave nie usuwa zdalnie tych kopii. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania opartego na zgodzie. Usuwanie konta jest osobnym procesem opisanym w §8.

Zależnie od platformy, urządzenia, konta i ustawień Android może kopiować, przywracać lub przenosić dane aplikacji objęte systemową kopią, w tym postęp, ustawienia i lokalne kopie zapisu. Obsługuje to Google lub inny dostawca platformy; Geo Studio nie otrzymuje z tego tytułu egzemplarza kopii. Odtworzenie każdego zapisu nie jest gwarantowane. Zobacz [informacje Google o kopiach Androida](https://support.google.com/android/answer/2819582?hl=pl).

Opcjonalne Unity Engine Diagnostics, Analytics, Crash Reporting i Performance Reporting są wyłączone w opisanej konfiguracji. Lokalne logi i ręczne zgłoszenia błędów pozostają dostępne. To nie wyłącza logowania do konta, usług reklamowych, komunikacji UMP ani usług Androida i nie oznacza braku połączeń sieciowych.



### Podstawy prawne tych usług

Dane niezbędne do realizacji wybranej usługi konta gry i prywatnego Cloud Save przetwarzamy na podstawie **art. 6 ust. 1 lit. b RODO**. Obejmuje to wyłącznie przetwarzanie obiektywnie niezbędne dla tych usług, nie publiczne ujawnianie. Publiczny udział i publikacja w rankingu opierają się na odrębnej zgodzie z **art. 6 ust. 1 lit. a**, którą możesz wycofać przez Leave Ranking. Niezbędne bezpieczeństwo i przeciwdziałanie nadużyciom opierają się na prawnie uzasadnionych interesach z **art. 6 ust. 1 lit. f**, z uwzględnieniem Twoich praw. Obsługa obowiązków wynikających z RODO opiera się na **art. 6 ust. 1 lit. c**. Reklamy i korespondencja mają podstawy opisane w §4–5. Wycofanie zgody na publiczny ranking nie wycofuje wybranej prywatnej usługi chmurowej.

Odrębnie, na podstawie **art. 6 ust. 1 lit. f**, naszym prawnie uzasadnionym interesem jest zachowanie ciągłości istniejącego profilu rankingu, aby opuszczenie publicznego udziału nie pozbawiało Cię pseudonimu, zapisanych wyników i pierwszeństwa osiągnięć. Zachowujemy ograniczony prywatny zapis powiązany z kontem gry: identyfikator rankingu i zarezerwowany pseudonim, rekord punktowy, ostatnio zapisany stan Energy i liczbę osiągnięć oraz czasy i kolejność pierwszych potwierdzeń potrzebne do zachowania wyników. Nie jest to pełny zapis gry ani historia każdej czynności. Decyzja o udziale oraz ograniczone dane wersji zapisu i zmiany pseudonimu pomagają respektować Twój wybór, blokować nieaktualne aktualizacje i nadużycia. Po Leave usługa rankingu nie aktualizuje Twoich wyników na podstawie kolejnych zapisów chmurowych ani nie publikuje profilu do ponownego potwierdzenia Join. Prywatne przechowywanie ma odrębny cel od zgody na publikację; nie pozwala kontynuować publicznego użycia po jej wycofaniu. Możesz wnieść sprzeciw wobec tej prywatnej retencji zgodnie z §9; jej kryteria opisuje §7.

## 3. Opcjonalne logowanie Google i konto gry

Jeżeli wybierzesz **Sign In with Google**, Google uwierzytelnia Cię, a gra korzysta z Unity Authentication do utworzenia lub rozpoznania powiązanego konta gry i obsługi sesji. W tym procesie przetwarzane są identyfikator gracza Unity, identyfikator powiązania Google oraz poświadczenia potrzebne do logowania i utrzymania sesji. Gra przekazuje token tożsamości Google do Unity Authentication w celu weryfikacji logowania. Zależnie od uprawnień Google i dostępnych informacji profilowych token może również zawierać adres e-mail, nazwę użytkownika lub odnośnik do zdjęcia profilowego. Są to dane odrębne od pseudonimu i danych udostępnianych w publicznym rankingu. Nie otrzymujemy Twojego hasła do Google.

Na urządzeniu mogą być zapisane dane sesji oraz powiązanie lokalnego postępu z identyfikatorami konta. Powiązanie pomaga rozpoznać, z którym kontem związany jest lokalny zapis. Nie jest kopią zapasową w chmurze ani zgodą na przenoszenie lub nadpisywanie postępu.

Potrzebujemy tych identyfikatorów do obsługi wybranej przez Ciebie usługi konta i logowania. Możesz nadal grać lokalnie bez konta. O reklamach decydujesz osobno.

Wylogowanie kończy sesję logowania w grze; nie usuwa konta gry, konta Google ani lokalnego postępu. Nie należy go traktować jako usunięcia wszystkich lokalnych powiązań lub kopii. Sposób złożenia wniosku o usunięcie konta opisuje §8.

## 4. Pomoc, korespondencja i dane wniosków

Gdy do nas piszesz, otrzymujemy Twój adres e-mail, treść wiadomości i wybrane przez Ciebie załączniki. W sprawach kont możemy przetwarzać informacje potrzebne do odnalezienia profilu i proporcjonalnego potwierdzenia uprawnienia do niego, zakres wniosku, daty, wynik obsługi i niezbędne potwierdzenia wykonania. Sam adres e-mail lub podany identyfikator gracza nie dowodzi uprawnienia do konta.

Nie przesyłamy automatycznie logów ani plików zapisu w ramach zgłoszenia pomocy. Otwarcie szkicu wiadomości nie wysyła jej i nie wykonuje wniosku. Wyślij ją samodzielnie i podaj tylko informacje potrzebne do sprawy.

- Zwykła pomoc, wyjaśnianie problemów i niezbędny dalszy kontakt opierają się na naszym prawnie uzasadnionym interesie zapewnienia obsługi gry — **art. 6 ust. 1 lit. f RODO**.
- Wykonywanie ustawowych praw z RODO i konieczna dokumentacja ich obsługi opierają się na **art. 6 ust. 1 lit. c w związku z art. 12–22 RODO**.
- Jeżeli niezbędne jest zachowanie minimum informacji dla ustalenia, dochodzenia lub obrony roszczeń, podstawą jest nasz prawnie uzasadniony interes z **art. 6 ust. 1 lit. f RODO**, z uwzględnieniem Twoich praw.

**Nie wysyłaj haseł, tokenów logowania, kodów weryfikacyjnych ani prywatnych plików zapisu w celu potwierdzenia konta.** Usuń zbędne dane osobowe ze zrzutów i uzgodnij zakres przed wysłaniem materiałów technicznych. Niepotrzebnych załączników nie zachowujemy.

## 5. Reklamy i wybory prywatności

Gra może oferować dobrowolne reklamy z nagrodą przez Unity LevelPlay, ironSource, Unity Ads i powiązane usługi reklamowe. Dostępność zależy od aktualnej wymaganej zgody, warunków technicznych i dostępności reklamy. Google UMP prezentuje i obsługuje wybory prywatności; Google Mobile Ads nie jest systemem wyświetlania reklam w grze.

Otwórz **Settings → Privacy preferences**, aby uzyskać dostęp do dostępnych opcji prywatności. Jeżeli formularz jest wyświetlany, możesz wyrazić zgodę, odmówić lub wybrać Manage options. **Bez wymaganej zgody reklamowej nie wysyłamy żądań reklam. Po odmowie nie stosujemy zastępczego wyświetlania reklam niespersonalizowanych.**

Zwykła rozgrywka i zwykłe nagrody offline pozostają dostępne bez zgody reklamowej. Samo uruchomienie gry, logowanie, naciśnięcie przycisku reklamy lub przeczytanie polityki nie jest taką zgodą. Wycofanie zgody nie wpływa na zgodność z prawem wcześniejszego przetwarzania na jej podstawie.

Spersonalizowane i inne niekonieczne przetwarzanie reklamowe opiera się na zgodzie z **art. 6 ust. 1 lit. a RODO**, gdy ma ona zastosowanie. Niekonieczny zapis lub odczyt informacji na urządzeniu wymaga właściwej uprzedniej zgody zgodnie z polskimi przepisami o komunikacji elektronicznej. Niezbędna obsługa informacji służących wyjaśnieniu, zapisaniu i respektowaniu wyborów prywatności jest odrębna i opiera się na właściwych obowiązkach prawnych — **art. 6 ust. 1 lit. c RODO**.

Dostawcy reklam i wyborów prywatności mogą przetwarzać adres IP, przybliżoną lokalizację ustaloną na jego podstawie, informacje o urządzeniu i aplikacji, dozwolone identyfikatory urządzenia lub reklamowe, dane diagnostyczne, wyświetlenia i kliknięcia reklam oraz wybory prywatności. Partnerzy reklamowi wykorzystują i udostępniają odpowiednie dane do wyświetlania i pomiaru reklam, zapobiegania nadużyciom oraz działania usług. Unity Ads deklaruje także zbieranie i udostępnianie identyfikatorów użytkowników do działania usługi oraz historii zakupów do celów reklamowych i analitycznych. Według Unity zbieranie czasu korzystania z aplikacji zależy od ustawienia optymalizacji reklam. [Informacje o Unity Ads SDK dla Androida](https://docs.unity.com/en-us/ads-android/4.20.0/privacy/developer-consent/disclosures/google-data-safety)

Zakres zależy od usługi, konfiguracji i wyborów; nie wszystkie kategorie są zawsze przesyłane. Komunikacja UMP może następować przed zgodą reklamową. Nie uprawnia to do niezwiązanego z nią przetwarzania przed dokonaniem wyboru.

## 6. Dostawcy, odbiorcy i transfery

W deklaracji Bezpieczeństwo danych Google Play wskazujemy nazwę gracza (pseudonim rankingowy) jako zbieraną. Siedem innych kategorii deklarujemy jako zbierane i udostępniane: identyfikatory użytkowników, historia zakupów, przybliżona lokalizacja, diagnostyka, interakcje z aplikacją, inne czynności oraz identyfikatory urządzenia i inne. Historia zakupów wynika z opisu SDK Unity Ads przytoczonego w §5. Kategorie obejmują grę i zintegrowane z nią usługi. Zakres przetwarzania zależy od używanej funkcji i wyborów prywatności.

Zależnie od używanej funkcji dane otrzymują lub przetwarzają:

- **Google — logowanie:** uwierzytelnienie wybranym kontem Google, zgodnie z właściwymi warunkami Google.
- **Unity Authentication, Cloud Save i Cloud Code:** obsługa tożsamości gracza i gościa, sesji, prywatnych zapisów w chmurze oraz rankingu. Podczas korzystania z usług Unity otrzymuje także informacje techniczne, w tym adres IP. W tej usłudze Geo Studio jest administratorem, a Unity przetwarza dane na jego rzecz na podstawie właściwych warunków i umowy powierzenia. To inna rola niż rola dostawców reklam.
- **Google UMP, Unity LevelPlay, ironSource Mobile i Unity Ads:** wybory prywatności, mediacja i reklamy. Dla przetwarzania reklamowego objętego ich warunkami dostawcy mogą działać jako niezależni administratorzy. Nazwy te nie stanowią pełnej listy dalszych odbiorców.
- **Proton:** poczta używana do pomocy i wniosków; przetwarza też informacje związane z doręczaniem korespondencji.
- **GitHub Pages:** hosting stron informacyjnych gry. Przy wejściu na stronę GitHub rejestruje adres IP dla celów bezpieczeństwa, również bez konta GitHub. Strony informacyjne nie są publiczną bazą wniosków graczy.
- **Aktualizacje w aplikacji przez Google Play:** Google Play przetwarza metadane urządzenia, wersję gry i listę zainstalowanych modułów i pakietów zasobów gry, aby sprawdzić dostępność aktualizacji i określić jej rozmiar. Google podaje, że te dane mają ustalony okres przechowywania, bez wskazania jego długości. [Informacje Google Play o aktualizacjach](https://developer.android.com/guide/playcore/in-app-updates#data-safety)
- **Dostawcy platformy Android, w tym Google, jeżeli są używani:** systemowe kopie i inne funkcje platformy według ustawień konta i urządzenia.

Zobacz [politykę Google](https://policies.google.com/privacy), [informację Unity o prywatności Authentication](https://docs.unity.com/en-us/authentication/privacy-and-consent/overview), [politykę Unity dla graczy](https://unity.com/legal/game-player-and-app-user-privacy-policy), [politykę Proton Mail](https://proton.me/mail/privacy-policy) i [politykę GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Rola dostawcy zależy od konkretnej usługi i właściwych warunków.

Niektórzy dostawcy mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym. W odpowiednich przypadkach stosowane są właściwe mechanizmy, np. decyzje o odpowiednim stopniu ochrony lub standardowe klauzule umowne. Informacje o transferach opisują [Google](https://policies.google.com/privacy/frameworks), wskazane zasady Unity i GitHub oraz [warunki Proton](https://proton.me/legal/dpa). Nie każdy mechanizm obejmuje każdy transfer. Informacje o właściwych zabezpieczeniach i sposobie uzyskania ich kopii można otrzymać od nas lub dostawcy.

## 7. Jak długo dane są przechowywane

| Kategoria | Okres lub kryterium |
| --- | --- |
| Lokalny postęp, ustawienia, powiązania i kopie zapisu | Do nadpisania lub usunięcia z urządzenia. Wylogowanie nie oznacza ich usunięcia. Czyszczenie danych lub odinstalowanie zwykle usuwa lokalne pliki i może pozbawić Cię postępu. |
| Konto gry i powiązanie z Google | Przez czas potrzebny do świadczenia wybranej usługi konta. Po weryfikacji administrator usuwa konto gry i powiązanie w sposób opisany w §8. |
| Prywatny zapis i dane synchronizacji | Serwer przechowuje bieżący zapis pomiędzy sesjami i aktualizuje go przy synchronizacji. Zamknięcie gry, wyłączenie okresowej synchronizacji i wylogowanie pozostawiają zapis na serwerze. Usunięcie konta obejmuje treść zapisu i wpisy operacyjne dotyczące konta. |
| Profil rankingu, pseudonim, wyniki i historia | Ograniczony prywatny zapis opisany w §2 zachowujemy, dopóki konto gry pozostaje dostępne, a dane są potrzebne do zachowania ciągłości tego profilu, w tym wybranego przez Ciebie powrotu. Leave kończy publiczny udział, nie tę prywatną ciągłość. Dane nie wygasają automatycznie po Leave. Dalszą potrzebę oceniamy przy obsłudze sprzeciwu lub żądania usunięcia oraz gdy konto, usługa rankingu lub cel kończą się albo istotnie zmieniają; usuwamy dane, gdy potrzeba ustaje, z zastrzeżeniem odrębnie uzasadnionego wymogu zachowania. Usunięcie konta obejmuje profil i jego historię w działającej usłudze rankingu. Sama możliwość wyobrażenia sobie powrotu nie uprawnia do bezterminowego przechowywania. |
| Gościnna tożsamość rankingu | Po zakończeniu procesu gry poświadczenia sesji znikają z pamięci aplikacji. Unity Authentication domyślnie przechowuje tożsamość na serwerze do jej usunięcia. Jeśli tylko przeglądałeś ranking jako gość, napisz o tym, abyśmy mogli ustalić, które dane można zidentyfikować. |
| Ochrona przed odtworzeniem usuniętych danych | W Cloud Save i rankingu pozostają minimalne prywatne oznaczenia powiązane z kontem. Identyfikują usunięty zapis lub profil i blokują jego odtworzenie przez nieaktualną operację. Nie zawierają postępu ani wyników. Przed zatwierdzeniem ich usunięcia administrator musi potwierdzić usunięcie starego konta, brak możliwości zapisu przez stare sesje lub operacje w toku oraz wygaśnięcie kontrolowanych kopii lub ochronę przed odtworzeniem z nich usuniętych danych. Sprawdzamy te warunki przy zamknięciu sprawy i przed przywracaniem kopii. Brak automatycznego terminu wygaśnięcia. |
| Pseudonimy zablokowane przez moderatora | Globalna lista przechowuje zablokowany tekst, aby uniemożliwić ponowne użycie nazwy. Blokada obowiązuje również po usunięciu profilu. |
| Dane i poświadczenia sesji | Przez czas potrzebny do uwierzytelnienia i obsługi sesji, według mechanizmów aplikacji i dostawców. Nie zachowujemy ich jako dowodów sprawy dotyczącej usunięcia. |
| Korespondencja pomocy i prywatności | Przez obsługę sprawy, następnie nie dłużej niż 12 miesięcy od zamknięcia, chyba że dłużej wymaga obowiązek prawny lub niezbędna obsługa roszczeń. Załączniki usuwamy wcześniej, gdy przestają być potrzebne. |
| Niezbędne potwierdzenia obsługi praw i usunięcia | Ograniczony zapis daty, zakresu żądania, wykonanych czynności i wyniku, tylko tak długo, jak jest niezbędny do wykazania wykonania konkretnego obowiązku prawnego lub obsługi konkretnego roszczenia. Okres ustalamy według tego obowiązku albo terminów dochodzenia roszczeń i przebiegu danej sprawy. Potrzebę i zakres oceniamy przy zamknięciu sprawy oraz gdy zmieniają się okoliczności uzasadniające dalsze zachowanie danych. Gdy potrzeba ustaje, usuwamy dane. Nie zachowujemy pod tą nazwą całego konta, pełnej korespondencji ani zbędnych załączników. |
| Kopie Androida, dane reklamowe i inne dane u dostawców | Według właściwych reguł usługi, celu, prawa i ustawień użytkownika; nie obowiązuje dla nich automatycznie nasz 12-miesięczny limit korespondencji. |

Nie przechowujemy danych bez potrzeby tylko dlatego, że powyższy maksymalny okres jeszcze nie upłynął. Przy zamknięciu sprawy ograniczamy zakres materiałów weryfikacyjnych. Administrator przechowuje prywatny plan, dziennik wykonanych kroków i dowody weryfikacji, aby dokończyć lub bezpiecznie wznowić usuwanie i sprawdzić wynik. Przy zamknięciu sprawy i przy zmianie okoliczności oceniamy, które dowody są jeszcze potrzebne do wykazania wykonania obowiązku lub obsługi konkretnego roszczenia. Pełna dokumentacja techniczna nie ma automatycznego terminu wygaśnięcia. Ograniczamy jej zakres, kiedy przestaje być potrzebna. Jeśli zachowujemy określone dane pomimo wniosku o usunięcie, wyjaśniamy ich zakres, cel, podstawę oraz okres lub kryterium przechowywania. Usunięcie aplikacji nie gwarantuje usunięcia kopii platformy. Wewnętrzne kopie techniczne Unity pozostają poza procedurą usuwania danych z działających usług. Nie możemy potwierdzić terminu wygaśnięcia poszczególnej kopii. Nie przywracamy usuniętego konta ze starych kopii. Zobacz [zasady Unity Authentication](https://docs.unity.com/en-us/authentication/privacy-and-consent/overview), [zasady Unity Cloud Save](https://docs.unity.com/en-us/cloud-save/privacy-and-consent/overview) i [informacje Google o retencji](https://policies.google.com/technologies/retention) i wskazane polityki dostawców.

## 8. Ręczne usunięcie konta gry i powiązanych danych

**W grze.** Połącz się z internetem i zaloguj na właściwe konto gry. Otwórz **Settings → Google Account → Delete Account** i potwierdź przez **Request Deletion**. Wniosek zostanie zarejestrowany do obsługi przez administratora. Aby go wycofać przed rozpoczęciem usuwania, wróć w to samo miejsce i wybierz **Cancel Account Deletion**. Stan oczekującego zgłoszenia możesz tam sprawdzić także po ponownym uruchomieniu gry.

**Bez gry.** Napisz na **[contact.geostudio@protonmail.com](mailto:contact.geostudio@protonmail.com?subject=Gem%3A%20Incremental%20Idle%20-%20usuniecie%20konta)** i poproś o usunięcie konta Gem: Incremental Idle i powiązanych danych. Poinformuj nas o utracie dostępu do powiązanego konta Google, jeśli Cię to dotyczy. Identyfikator gracza, jeśli go znasz, może pomóc odnaleźć konto. Przyjmujemy początkowe zgłoszenie również bez niego. Sam adres nadawcy lub identyfikator nie wystarcza do potwierdzenia uprawnienia do konta. Stosujemy proporcjonalną weryfikację i prywatnie wyjaśniamy dalsze kroki. [Instrukcja usuwania konta](https://geostudiogames.github.io/gem-incremental-idle-site/account-deletion/pl/)

**Po weryfikacji.** Administrator usuwa tożsamość konta gry w Unity Authentication i jej powiązanie z Google, treść prywatnego zapisu w chmurze, profil bieżącego rankingu z publicznym identyfikatorem, rezerwacją aktualnego pseudonimu, wynikami i historią, a także powiązany wpis oczekującego wniosku i wpisy operacyjne dotyczące konta. Sprawdzamy wynik i wyjaśniamy, co pozostało. Zachowujemy ochronne oznaczenia i niezbędną dokumentację obsługi opisane w §7.

Po usunięciu konta gry zachowujesz konto Google. Usuwanie z działających usług nie obejmuje plików urządzenia, kopii tabel u innych graczy, kopii Androida ani wewnętrznych kopii technicznych Unity. Wyczyszczenie danych aplikacji może trwale usunąć lokalny postęp. Partnerzy reklamowi mogą przechowywać odrębne dane pod własnymi identyfikatorami. Pomagamy wskazać właściwego dostawcę i realizujemy wnioski dotyczące danych pod naszą kontrolą.

**Usunięcie wyłącznie profilu rankingowego (Ranking Only).** Napisz na contact.geostudio@protonmail.com, że chcesz zachować konto gry i Cloud Save, a usunąć profil rankingowy. Sprawdzimy, czy profil należy do Ciebie, i potwierdzimy z Tobą zakres wniosku. Poprosimy o zamknięcie wszystkich sesji gry i wyjaśnienie wyniku ewentualnego żądania Join przed wykonaniem operacji. Następnie administrator ręcznie usunie Twój profil z działającej usługi rankingowej, wraz z rezerwacją pseudonimu, wynikami i historią rankingu, i sprawdzi wynik. Zachowasz możliwość logowania, prywatny Cloud Save i lokalny postęp. Wcześniej pobrane tabele i kopie zapasowe dostawców pozostają poza zakresem procedury. Możesz później ponownie wybrać Join, aby utworzyć nowy profil. Odzyskanie dawnego pseudonimu, wyników i historii nie jest gwarantowane.

## 9. Twoje prawa

W granicach RODO możesz żądać dostępu, sprostowania, usunięcia, ograniczenia i — jeżeli spełnione są warunki — przenoszenia danych. Możesz wnieść sprzeciw wobec przetwarzania opartego na prawnie uzasadnionym interesie z przyczyn związanych z Twoją sytuacją. Możesz wycofać zgodę bez wpływu na zgodność wcześniejszego przetwarzania z prawem.

**Możesz wnieść sprzeciw konkretnie wobec zachowywania prywatnego profilu rankingu po Leave**, bez żądania usunięcia całego konta gry lub Cloud Save. Zaprzestaniemy tego przetwarzania, chyba że wykażemy ważne prawnie uzasadnione podstawy nadrzędne wobec Twoich interesów, praw i wolności albo przetwarzanie jest potrzebne do roszczeń prawnych. Możesz żądać ograniczenia na czas weryfikacji podstaw. Żądanie dotyczące rankingu oceniamy osobno; skorzystanie z tego prawa samo w sobie nie upoważnia do usunięcia konta ani postępu chmurowego. Leave już zatrzymuje publiczny udział bez potrzeby uzasadniania.

Napisz na **contact.geostudio@protonmail.com**. Dodatkowych informacji identyfikujących żądamy tylko przy uzasadnionych wątpliwościach i w zakresie proporcjonalnym do wniosku oraz ryzyka. Nie żądamy rutynowo dokumentów tożsamości. Nie prosimy o hasła, tokeny lub kody logowania.

O działaniach podjętych w związku z wnioskiem informujemy bez zbędnej zwłoki, nie później niż w ciągu miesiąca od jego otrzymania. Jeżeli złożoność lub liczba wniosków uzasadnia zgodne z RODO przedłużenie o maksymalnie dwa kolejne miesiące, w pierwszym miesiącu poinformujemy o przedłużeniu i jego przyczynach. Jeśli nie podejmiemy działań, bez zbędnej zwłoki, najpóźniej w tym pierwszym miesiącu, podamy przyczyny oraz możliwości skargi i ochrony sądowej. Obsługa jest co do zasady bezpłatna, z ustawowymi wyjątkami dla żądań ewidentnie nieuzasadnionych lub nadmiernych.

Zajmujemy się danymi pod naszą kontrolą i współpracujemy z właściwymi dostawcami. Uzasadnione prawne wyjątki od usunięcia pozostają w mocy. Możesz złożyć skargę do **Prezesa Urzędu Ochrony Danych Osobowych**; zobacz [informacje o prawach](https://uodo.gov.pl/pl/493/155) i [skargach](https://uodo.gov.pl/pl/526/2464).

## 10. Bezpieczeństwo

Dane przesyłane przez grę do usług online są szyfrowane podczas transmisji za pomocą HTTPS. Uwierzytelnianie i kontrola dostępu po stronie serwera ograniczają dostęp do prywatnych zapisów. Dane publicznych tabel są udostępniane osobom przeglądającym ranking. Żadna metoda transmisji ani przechowywania nie zapewnia całkowitego bezpieczeństwa.

## 11. Zmiany polityki

Aktualizujemy politykę, gdy zmieniają się faktyczne usługi lub zasady przetwarzania. Istotne zmiany i ich datę przedstawimy w odpowiednim komunikacie przed zastosowaniem zmienionych zasad, gdy jest to wymagane. Aktualizacja polityki sama nie jest zgodą na reklamy ani nie uruchamia synchronizacji postępu.

Pytania możesz przesyłać na **contact.geostudio@protonmail.com**.
