# Inżyniera oprogramowania

## Temat

Temat projektu to system do obsługi siłowni.

## Opis systemu

### 1. Podstawowe informacje o systemie

System zarządzania siłownią ma na celu efektywne zarządzanie członkostwem, rezerwacjami zajęć oraz obsługą klientów w siłowni. System umożliwia klientom wykupienie karnetów, zarządzanie nimi oraz rezerwację miejsc na zajęcia. Trenerzy mogą organizować zajęcia, rezerwować sale oraz komunikować się z klientami. Pracownicy mają możliwość weryfikacji karnetów i zarządzania danymi klientów, a menedżerowie mogą zarządzać personelem.

### 2. Opis modelowanej rzeczywistości

Na system składają się następujące byty:

-   **Karnet wstępu** - dokument uprawniający klienta do wejścia na siłownię. Karnet określa okno czasowe w którym uprawnienie jest ważne, dane personalne właściciela, dane płatności, a także dane kontaktowe. Jest również wykorzystywany do identyfikacji dni i czasu w którym użytkownik był obecny na obiekcie siłowni. Karnet można wykupić, anulować, przepisać do innego klienta, a także zmienić figurujące na nim dane.
-   **Sala treningowa** - pomieszczenie na którym odbywają się treningi. Wykorzystywana jest przy realizacji zajęć sportowych. Sala ma swój unikatowy numer, wyposażenie i maksymalną liczbę osób, która jednocześnie moze się znajdować w pomieszczeniu. Sala może być zarezerwowana na rzecz ćwiczeń, a także wyłączona z użytku z uwagi na prace porządkowe.
-   **Zajęcia** - stanowią zarezerwowane okno czasowe, w którym odbywają się ćwiczenia grupowe. Zajęcia opisywane są poprzez godziny oraz datę, kiedy treningi są realizowane, salę w której się odbywają, trenerów którzy je prowadzą, a także klientów, którzy w nich uczestniczą. Zajęcia mogą być organizowane w określonym czasie, anulowane bądź przełożone na inny dzień.

-   ...

###### Pomysły

-   Sprzęt do ćwiczeń
-   Produkty ze sklepiku
-   Plany treningowe
-   Rodzaj karnetu

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

Pracownik ma możliwość wydawania oraz wprowadzania zmian w karnetach klientów. Weryfikuje, czy użytkownik wszedł na obiekt siłowni skanując swój karnet.

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

## User Stories

Jako klient siłowni:

1. Chcę wykupić karnet w taki sposób, aby móc ćwiczyć.
2. Chcę zapisać się na zajęcia w taki sposób, aby móc ćwiczyć pod czyimś okiem.
3. Chcę zrezygnować z karnetu w taki sposób, aby nie musieć za niego płacić.
4. Chcę przedłużyć karnet w taki sposób, aby móc dalej ćwiczyć.
5. Chcę zarządzać karnetem w taki sposób, aby móc go anulować/przedłużyć.
6. Chcę zmienić swoje dane na karnecie w taki sposób, aby były aktualne (np. dane kontaktowe, płatności).

Jako trener:

1. Chcę organizować zajęcia w taki sposób, aby klienci mogli ćwiczyć w grupie.
2. Chcę rezerwować sale na zajęcia w taki sposób, aby klienci mogli ćwiczyć w grupie.
3. Chcę odwołać zajęcia w taki sposób, aby klienci nie musieli przychodzić.
4. Chcę zarządzać salami w taki sposób, aby móc zmienić salę, w której będą zajęcia.
5. Chcę komunikować się z klientami w taki sposób, aby informować ich o zmianach w zajęciach (np. odwołanie, zmiana sali).

Jako pracownik:

1. Chcę konserwować sale w taki sposób, aby były w dobrym stanie.
2. Chcę anulować karnet w taki sposób, aby zakończyć dostęp klienta do siłowni.
3. Chcę zmieniać dane karnetu w taki sposób, aby klient mógł zarządzać swoimi danymi personalnymi.
4. Chcę weryfikować wejście klienta w taki sposób, aby sprawdzić, czy ma ważny karnet.

Jako menedżer:

1. Chcę rezerwować sale na zajęcia w taki sposób, aby trener mógł przeprowadzić zajęcia.
2. Chcę zarządzać karnetami w taki sposób, aby móc monitorować ćwiczących klientów.
3. Chcę zarządzać pracownikami w taki sposób, aby móc delegować zadania (np. konserwację, anulowanie karnetów).
4. Chcę analizować obłożenie sal w taki sposób, aby zoptymalizować organizację zajęć.
5. Chcę monitorować sprzedaż karnetów w taki sposób, aby sprawdzać poziom przychodów siłowni.
