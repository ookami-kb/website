# New line before return

## Rule id {#rule-id}

newline-before-return

## Description {#description}

Enforces blank line between statements and return in a block.

### Example {#example}

Bad:

```dart
  if ( ... ) {
    ...
    return ...; // LINT
  }
```

Good:

```dart
  if ( ... ) {
    return ...;
  }

  if ( ... ) {
    ...

    return ...;
  }
```
