# Inżyniera oprogramowania

## Temat
Temat projektu to system do obsługi siłowni.

## Opis systemu

### 1. Podstawowe informacje o systemie
...

### 2. Opis modelowanej rzeczywistości

Na system składają się następujące byty:
- **Karnet wstępu** - dokument uprawniający klienta do wejścia na siłownię. Karnet określa okno czasowe w którym uprawnienie jest ważne, dane personalne właściciela, dane płatności, a także dane kontaktowe. Jest również wykorzystywany do identyfikacji dni i czasu w którym użytkownik był obecny na obiekcie siłowni. Karnet można wykupić, anulować, przepisać do innego klienta, a także zmienić figurujące na nim dane.
- **Sala treningowa** - pomieszczenie na którym odbywają się treningi. Wykorzystywana jest przy realizacji zajęć sportowych. Sala ma swój unikatowy numer, wyposażenie i maksymalną liczbę osób, która jednocześnie moze się znajdować w pomieszczeniu. Sala może być zarezerwowana na rzecz ćwiczeń, a także wyłączona z użytku z uwagi na prace porządkowe.
- **Zajęcia** - stanowią zarezerwowane okno czasowe, w którym odbywają się ćwiczenia grupowe. Zajęcia opisywane są poprzez godziny oraz datę, kiedy treningi są realizowane, salę w której się odbywają, trenerów którzy je prowadzą, a także klientów, którzy w nich uczestniczą. Zajęcia mogą być organizowane w określonym czasie, anulowane bądź przełożone na inny dzień.
 
- ...

###### Pomysły
- Sprzęt do ćwiczeń
- Produkty ze sklepiku
- Plany treningowe

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
Menedżer może zarządząć pracownikami, salami (xd), a takżę wykorzystywać system w taki sposób jak inni pracownicy (np. zarządzać karnetami użytkowników).
