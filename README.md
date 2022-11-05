# LOTR-SDK
Lord of the Rings SDK

## Getting started

### Installation:
`npm install @skapicic/lotr-sdk`

### Initialisation:
In the head of your page initialise the sdk by running

```
<script src="lotr.js">
</script>
<script>
  Lotr.init({ apiKey: 'yourApiKey' });
</script>
```

That's it!

### Basic usage

Entities that are supported for the current version are

* Books
* Chapters
* Characters
* Movies
* Quotes

All the mentioned entities support getting by id or list.
The list API supports pagination, sorting and filtering. (see <a name="examples">examples</a>)
All methods return Promises that are free to use asynchronously throughout the code.

## Filter API

There is included support for filtering via an api.
The syntax is simple:
```
Lotr.filter('$FIELD_NAME').$OPERAND;
```
Where the `$OPERAND` can be substituted with any of the following:

* `matches(value: string, negate?: boolean)` - field is an exact match
* `includes(values: string[], negate?: boolean)` - field includes at least one value
* `regex(value: string, negate?: boolean)` - matches Regular Expression
* `exists(negate?: boolean)` - field exists
* `greaterThan(value: number, orEquals?: boolean)` - field is greater than (orEquals)
* `lesserThan(value: number, orEquals?: boolean)` - field is lesser than (orEquals)

```
IMPORTANT: Although it is possible to chain multiple operands on a Filter
e.g. Lotr.filter('name').matches('Frodo').includes(['Gandalf'])
the last used operand will overwrite the whole chain so this should rarely/never be used
```

## Examples
Book by id:
```
Lotr.book('5cf5805fb53e011a64671582');
```
All books:
```
Lotr.books();
```
Paginated, sorted or filtered books:
```
Lotr.books({
    page: 1,
    limit: 10, 
    sort: { by: 'name', direction: 'asc' },
    filters: [
        Lotr.filter('name')
            .matches('The Return Of The King')
    ]
});
```



