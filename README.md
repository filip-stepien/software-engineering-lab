# Inżyniera oprogramowania

## Temat

Temat projektu to system do obsługi siłowni.

## Lab 1: Opis systemu

### 1. Podstawowe informacje o systemie

System zarządzania siłownią ma na celu efektywne zarządzanie członkostwem, rezerwacjami zajęć oraz obsługą klientów w siłowni. System umożliwia klientom wykupienie karnetów, zarządzanie nimi oraz rezerwację miejsc na zajęcia. Trenerzy mogą organizować zajęcia, rezerwować sale oraz komunikować się z klientami. Pracownicy mają możliwość weryfikacji karnetów i zarządzania danymi klientów, a menedżerowie mogą zarządzać personelem.

### 2. Opis modelowanej rzeczywistości

Na system składają się następujące byty:

-   **Karnet wstępu** - dokument uprawniający klienta do wejścia na siłownię. Karnet określa okno czasowe w którym uprawnienie jest ważne, dane personalne właściciela, dane płatności, a także dane kontaktowe. Jest również wykorzystywany do identyfikacji dni i czasu w którym użytkownik był obecny na obiekcie siłowni.
-   **Sala treningowa** - pomieszczenie na którym odbywają się treningi. Wykorzystywana jest przy realizacji zajęć sportowych. Sala ma swój unikatowy numer, wyposażenie i maksymalną liczbę osób, która jednocześnie moze się znajdować w pomieszczeniu.
-   **Zajęcia** - stanowią zarezerwowane okno czasowe, w którym odbywają się ćwiczenia grupowe. Zajęcia opisywane są poprzez godziny oraz datę, kiedy treningi są realizowane, salę w której się odbywają, trenerów którzy je prowadzą, a także klientów, którzy w nich uczestniczą.

### 3. Nakreślenie użytkowników systemu

###### Użytkownicy:

1. klient
2. trener
3. pracownik
4. menedżer

###### 3.1. Klient

Każdy klient ma swój karnet którym może zarządzać, może się również zapisać na zajęcia, a także konsultować z trenerem.

###### 3.2 Trener

Trener może rezerwować salę treningowe, zarządzać zajęciami i kontaktować się z klientami.

###### 3.3 Pracownik

Pracownik ma możliwość wydawania oraz wprowadzania zmian w karnetach klientów.

###### 3.4 Menedżer

Menedżer może zarządząć pracownikami, salami, a takżę wykorzystywać system w taki sposób jak inni pracownicy (np. zarządzać karnetami użytkowników).

### 4. Opis funkcjonalności systemu

###### Funkcjonalności:

1. Wykupienie karnetu
2. Rezygnacja z karnetu
3. Przedłużenie karnetu
4. Zmiana danych na karnecie
5. Zapis klienta na zajęcia
6. Organizacja zajęć przez trenera
7. Anulowanie zajęć przez trenera
8. Zarządzanie salami

###### 4.1. Wykupienie karnetu

Użytkownik musi zwrócić się do pracownika o założenie karnetu. Wówczas należy podać dane personalne, sposób płatności, a także wybrać rodzaj karnetu.

###### 4.2. Rezygnacja z karnetu

Pracownik anuluje karnet za prośbą użytkownika. Użytkownik w tym celu podaje swoje dane personalne.

###### 4.3. Przedłużenie karnetu

Jeżeli karnet nie zostanie anulowany, to jego przedłużenie następuje samoistnie bez potrzeby interakcji użytkownika.

###### 4.4. Zarządzanie karnetem

Użytkownik zwraca się do pracownika, który edytuje dane przypisane do karnetu. Klient musi określić, które dane chce zmienić, a pracownik musi zweryfikować, czy zmiana ta jest możliwa.

###### 4.5. Zapis klienta na zajęcia

Klienci mają podgląd do wprowadzanych zajęć, na które mogą dowolnie się zapisywać.

###### 4.6. Organizacja zajęć przez trenera

Trener dodaje do systemu planowaną datę i godzinę zajęć, ich rodzaj, a także numer sali.

###### 4.7. Anulowanie zajęć przez trenera

Trener usuwa z systemu informację o wcześniej zaplanowanych zajęciach.

###### 4.8. Zarządzanie salami

Menedżer ustala w systemie, które sale są w użytku i mogą być rezerwowane na rzecz zajęć, a które wymagają konserwacji.

### 5. Opis założeń niefunkcjonalnych systemu

System jest wieloplatformowy: wszyscy użytkownicy mają dostęp do systemu poprzez stronę internetową, a klienci oraz trenerzy mogą prowadzić interakcję z systemem poprzez aplikację mobilną. Ponatdo podlega łatwej skalowalności i jest odporny na znaczne obciążenie zasobów, będąc przygotowanym na obsługę dużej ilości użytkowników. Autoryzacja odbywa się z pomocą bezpiecznych metod uwierzytelniania, a także weryfikacji dwuetapowej dla pracowników i menedżerów. Interfejs jest intuicyjny i responsywny, nawigacja jest zoptymalizowana pod kątem dostępności dla każdego użytkownika.

## Słownik

-   Karnet wstępu - identyfikator klienta w systemie, autoryzujący do wejścia na siłownie. Karnet można wykupić, anulować, przepisać do innego klienta, a także zmienić figurujące na nim dane.
-   Sala treningowa - obiekt, na którym odbywają się treningi. Sala może być zarezerwowana na rzecz ćwiczeń, a także wyłączona z użytku z uwagi na prace porządkowe.
-   Zajęcia - przedział czasu, kiedy na sali odbywa się trening. Zajęcia mogą być organizowane w określonym czasie, anulowane bądź przełożone na inny dzień.
-   Klient - podstawowy użytkownik systemu. Klient może wykupić i zarządzać karnetem, zapisywać na zajęcia, a także kontaktować z trenerem.
-   Trener - osoba odpowiedzialna za organizację zajęć treningowych i konsultację z klientami.
-   Pracownik - użytkownik systemu autoryzujący operacje związane z zarządzaniem karnetami klienów.
-   Menedżer - osoba zarządzająca pracownikami, karnetami oraz salami w systemie.

## User Stories

Jako klient siłowni:

1. Chcę wykupić karnet w taki sposób, aby móc ćwiczyć.
2. Chcę zapisać się na zajęcia w taki sposób, aby móc ćwiczyć pod czyimś okiem.
3. Chcę zrezygnować z karnetu w taki sposób, aby nie musieć za niego płacić.
4. Chcę przedłużyć karnet w taki sposób, aby móc dalej ćwiczyć.
5. Chcę zarządzać karnetem w taki sposób, aby móc go anulować/przedłużyć.
6. Chcę zmienić swoje dane na karnecie w taki sposób, aby były aktualne (np. dane kontaktowe, płatności).
7. Chcę przeglądać dostępne zajęcia w taki sposób, aby móc znaleźć te, które mnie interesują.
8. Chcę kontakować się z trenerem w taki sposób, aby uzyskać informacje, które mnie interesują.
9. Chcę logować się do systemu w taki sposób, aby móc z niego korzystać.

Jako trener:

1. Chcę organizować zajęcia w taki sposób, aby klienci mogli ćwiczyć w grupie.
2. Chcę rezerwować sale na zajęcia w taki sposób, aby klienci mogli ćwiczyć w grupie.
3. Chcę odwołać zajęcia w taki sposób, aby klienci nie musieli przychodzić.
4. Chcę zarządzać salami w taki sposób, aby móc zmienić salę, w której będą zajęcia.
5. Chcę komunikować się z klientami w taki sposób, aby informować ich o zmianach w zajęciach (np. odwołanie, zmiana sali).
6. Chcę przeglądać listę klientów zapisanych na moje zajęcia, aby wiedzieć, kto będzie uczestniczył w treningu.
7. Chcę mieć możliwość oceniania postępów klientów, aby dostosować program zajęć do ich potrzeb.

Jako pracownik:

1. Chcę konserwować sale w taki sposób, aby były w dobrym stanie.
2. Chcę anulować karnet w taki sposób, aby zakończyć dostęp klienta do siłowni.
3. Chcę zmieniać dane karnetu w taki sposób, aby klient mógł zarządzać swoimi danymi personalnymi.
4. Chcę weryfikować wejście klienta w taki sposób, aby sprawdzić, czy ma ważny karnet.
5. Chcę generować raporty dotyczące aktywności klientów, aby monitorować ich zaangażowanie.
6. Chcę informować klientów o kończących się karnetach, aby zachęcać ich do przedłużenia.
7. Chcę konserwować sale treningowe, w taki sposób, aby były przygotowane do zajęć.

Jako menedżer:

1. Chcę rezerwować sale na zajęcia w taki sposób, aby trener mógł przeprowadzić zajęcia.
2. Chcę zarządzać karnetami w taki sposób, aby móc monitorować ćwiczących klientów.
3. Chcę zarządzać pracownikami w taki sposób, aby móc ich dodawać, usuwać oraz edytować ich dane.
4. Chcę analizować obłożenie sal w taki sposób, aby zoptymalizować organizację zajęć.
5. Chcę monitorować sprzedaż karnetów w taki sposób, aby sprawdzać poziom przychodów siłowni.
6. Chcę aktualizować informacje o dostępności sal, aby klienci i trenerzy mogli trenować.
7. Chcę tworzyć raporty o popularności zajęć, aby lepiej planować grafik pracowników.
8. Chcę dodawać sale do systemu w taki sposób, aby klienci mogli korzystać z nowych sal.
9. Chcę zamkyać sale w taki sposób, aby nie można było w nich odbywać zajęć.

## Lab 2: Scenariusze przypadków użycia

#### Wykupienie karnetu

-   **Warunki początkowe**:
    `brak`
-   **Warunki końcowe**:
    -   Utworzenie karnetu identyfikującego użytkownika
-   **Aktorzy**:
    -   Klient
    -   Pracownik
-   **Przepływ zdarzeń**:
    1. Klient zwraca się do pracownika o utworzenie karnetu
    2. Pracownik wybiera opcję `Nowy karnet`
    3. System wyświetla formularz do utworzenia karnetu.
    4. Pracownik wprowadza dane personalne, płatnicze i kontaktowe klienta do formularza
    5. Pracownik wybiera opcję `Zapisz`
    6. System sprawdza czy wprowadzone dane mają prawidłowy format
    7. System sprawdza czy metoda płatncza jest dostępna
    8. System tworzy nowy karnet
    9. System pobiera opłatę
    10. System wyświetla potwierdzenie
-   **Alternatywny przepływ zdarzeń**:

    6. Błędny format danych. POWRÓT DO 3
    7. Metoda płatnicza jest niedostępna. POWRÓT DO 3

#### Rezygnacja z karnetu

-   **Warunki początkowe**:
    -   Musi istnieć karnet identyfikujący klienta
-   **Warunki końcowe**:
    -   Karnet identyfikujący klienta usunięty z systemu
-   **Aktorzy**:
    -   Klient
    -   Pracownik
-   **Przepływ zdarzeń**:
    1. Klient zwraca się do pracownika o rezygnację z karnetu
    2. Pracownik wybiera opcję `Wyświetl karnety`
    3. System wyświetla listę karnetów
    4. Pracownik wpisuje dane klienta do wyszukiwarki
    5. System wyświetla opcję pasujące do wyszukiwania
    6. Pracownik wybiera karnet z listy wynikowej
    7. Pracownik wybiera opcję `Usuń karnet`
    8. System wyświetla okno z potwierdzeniem
    9. Pracownik potwierdza usunięcie karnetu.
    10. Sysyem usuwa karnet
    11. System generuje potwierdzenie operacji.
-   **Alternatywny przepływ zdarzeń**:

    5. Klient nie został znaleziony. POWRÓT DO 3

#### Przedłużenie karnetu

-   **Warunki początkowe**:
    -   Musi istnieć karnet identyfikujący klienta
-   **Warunki końcowe**:
    -   Przedłużona data karnetu
-   **Aktorzy**: `brak`
    1. System sprawdza datę ważności karnetów użytkowników
    2. System odnajduje nie ważny karnet
    3. System sprawdza czy metoda płatnicza do odnowienia karnetu jest dostępna
    4. System odnawia karnet
    5. System pobiera opłatę
-   **Alternatywny przepływ zdarzeń**:
    3. Metoda płatnicza niedostępna. POWRÓT DO 1

#### Zmiana danych na karnecie

-   **Warunki początkowe**:
    -   Musi istnieć karnet identyfikujący klienta
-   **Warunki końcowe**:
    -   Zmodyfikowane dane na karnecie użytkownika
-   **Aktorzy**:
    -   Klient
    -   Pracownik
-   **Przepływ zdarzeń**:
    1. Klient zwraca się do pracownika o modfyikację danych na karnecie
    2. Pracownik wybiera opcję `Wyświetl karnety`
    3. System wyświetla listę karnetów
    4. Pracownik wpisuje dane klienta do wyszukiwarki
    5. System wyświetla opcję pasujące do wyszukiwania
    6. Pracownik wybiera karnet z listy wynikowej
    7. System wyświetla formularz z danymi
    8. Pracownik edytuje dane w formularzu
    9. Pracownik wybiera opcję `Zapisz`
    10. System sprawdza czy wprowadzone dane mają prawidłowy format
    11. System modyfikuje dane karnetu
    12. System generuje potwierdzenie operacji.
-   **Alternatywny przepływ zdarzeń**:

    5. Klient nie został znaleziony. POWRÓT DO 3
    6. Nieprawidłowy format danych. POWRÓT DO 7

#### Logowanie do systemu

-   **Warunki początkowe**:
    -   Użytkownik musi istnieć w systemie
-   **Warunki końcowe**:
    -   Utworzona sesja użytkownika
-   **Aktorzy**:
    -   `???`
-   **Przepływ zdarzeń**:
    1. Użytkownik przechodzi do ekranu logowania
    2. System wyświetla formularz logowania
    3. Użytkownik wpisuje dane logowania
    4. Użytkownik wybiera opcję `Zaloguj`
    5. System sprawdza czy użytkownik istnieje
    6. System tworzy sesję użytkownika
    7. System wyświetla ekran startowy
-   **Alternatywny przepływ zdarzeń**:

    5. Użytkownik nie został znaleziony. POWRÓT DO 2

#### Zapis klienta na zajęcia

-   **Warunki początkowe**:
    -   Klient zalogowany w systemie
-   **Warunki końcowe**:
    -   Klient przypisany do zajęć
-   **Aktorzy**:
    -   Klient
-   **Przepływ zdarzeń**:
    1. Klient wybiera ekran z zajęciami
    2. System wyświetla kalendarz z zaplanowanymi zajęciami
    3. Klient wybiera interesujące go zajęcia
    4. System wyświetla szczegóły wybranych zajęć
    5. Klient wybiera opcję `Zapisz się`
    6. System sprawdza dostępność miejsc na zajęciach
    7. System zapisuje klienta na zajęcia
    8. System wyświetla potwierdzenie
-   **Alternatywny przepływ zdarzeń**:

    6. Nie ma dostępnych miejsc. POWRÓT DO 2
