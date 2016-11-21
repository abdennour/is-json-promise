# Use

```js
import from 'is-json-promise';

String.IsJSON(`iam here`)
   .then((object) => console.info(object))
   .catch((error) => alert('Waww, i cannot be JSON')) ; // promise will run catch
```   
or

```js
import from 'is-json-promise';

String.IsJSON(`{"welcome":"Hello"}`)
   .then((object) => console.info(object)) // promise will run "then"
   .catch((error) => alert('Waww, i cannot be JSON')) ;
```

# Safe import :

It will not extend the `String` class with a static method , but it will give you this method as a function :

```js
import {IsJSON} from 'is-json-promise/safe';

IsJSON(`{"welcome":"Hello"}`)
   .then((object) => console.info(object)) // promise will run "then"
   .catch((error) => alert('Waww, i cannot be JSON')) ;
```
