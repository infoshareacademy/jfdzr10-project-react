
Zadaniem jest implementacja przy pomocy Reacta załączonego designu. Aplikacja powinna być podzielona na komponenty, w którym każdy z nich będzie odpowiedzialny za pojedynczą funkcjonalność zgodnie z naturą Reacta. Co stylowania wykorzystujemy CSS Modules lub styled components.

Aby rozpoczać pisanie kodu konieczne będzie stworzenie szablonu aplikacji za pomocą create-react-app albo vite. Najpierw jednak otwórzcie konsolę i za pomocą komendy 'cd' ustawcie aktualny folder na folder swojego teamu. Następnie wykorzystajcie poniższą komendę aby zainstalować projekt:

npx create-react-app integration
gdzie 'integration' to nazwa projektu - może być dowolna inna.


1. Strona powinna komunikować się z zewnętrznym API.
2. API powinno być zbudowane z wykorzystaniem JSON Server (https://github.com/typicode/json-server)
3. Dane są zawarte w pliku data.json które powinny być fetchowane przez json-server
4. Dane do komponentów powinny być przekazywane przez propsy