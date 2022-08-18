# js-map-filter-reduce

# Map, Filter, Reduce

#### 1. Gesamtbestellungen abfragen

-   Berechne die Gesamtzahl der Bestellungen.

```javascript
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
];
```

#### 2. Inkrementieren um 1

```javascript
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
```

-   Erstellen Sie eine Funktion, die jedes Element in `arrayOfNumbers` um 1 erhöht. Geben Sie das neue Array von modifizierten Elementen zurück.

#### 3. Gerade Zahlen filtern

-   Erstellen Sie eine Funktion namens filterEvens, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array von Zahlen als Argument nehmen und keine Schleife verwenden.
-   Beispiele:

```javascript
filterEvens([1, 2, 3, 11, 12, 13]); //returned [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returned [22,2,110,6]
```

#### 4. Freunde filtern

-   Erstelle eine Funktion, die ein übergebenes Array nach einem "Suchbefehl" filtert.
-   Beispiele

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];
```

#### 5. Summe

-   Schreiben Sie eine Funktion namens sum, die die Methode reduce verwendet, um ein Array von Zahlen zu summieren.
-   Beispiele:

```javascript
sum([1, 2, 3, 4, 5]); //gibt 15 zurück
sum([6, 7, 7]); //liefert 20
```

#### 6. Quadratwurzel

-   Schreibe eine Funktion die ein Array aus Numbers als Parameter erhält. Finde für jede Zahl die Quadratwurzel und gebe das neue Array zurück.
