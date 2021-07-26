---
sidebar_position: 2
---

# Configuration

To configure the package add a `dart_code_metrics` entry to a `analysis_options.yaml`. This configuration is used by both CLI and the analyzer plugin.

```yaml title="analysis_options.yaml"
dart_code_metrics:
  anti-patterns:
    - ... # configures the list of anti-patterns
  metrics:
    - ... # configures the list of reported metrics
  metrics-exclude:
    - ... # configures the list of files that should be ignored by metrics
  rules:
    - ... # configures the list of rules
```

Basic config example:

```yaml title="analysis_options.yaml"
dart_code_metrics:
  anti-patterns:
    - long-method
    - long-parameter-list
  metrics:
    cyclomatic-complexity: 20
    number-of-arguments: 4
    maximum-nesting-level: 5
  metrics-exclude:
    - test/**
  rules:
    - newline-before-return
    - no-boolean-literal-compare
    - no-empty-block
    - prefer-trailing-comma
    - prefer-conditional-expressions
    - no-equal-then-else
```

## Configuring a rules entry

To enable a rule add its id to the `rules` entry. All rules have severity which can be overridden with `severity` config entry. For example,

```yaml title="analysis_options.yaml"
dart_code_metrics:
  rules:
    - newline-before-return:
        severity: style
```

will set severity to `style`. Available severity values:

- none
- style
- performance
- warning
- error

Rules with a `configurable` badge have additional configuration, check out their docs for more information.

## Configuring a metrics entry

To enable a metric add its id to the `metrics` entry in the `analysis_options.yaml`. All metrics can take a threshold value. If no value was provided, the default value will be used.

## Configuring a metrics-exclude entry

To exclude files from a metrics report provide a list of regular expressions for ignored files. For example:

```yaml title="analysis_options.yaml"
dart_code_metrics:
  metrics-exclude:
    - test/**
    - lib/src/some_file.dart
```

## Configuring an anti-pattern entry

To enable an anti-pattern add its id to the `anti-patterns` entry.

## Ignoring a rule or anti-pattern

If a specific rule or anti-pattern warning should be ignored, it can be flagged with a comment. For example,

```dart
// ignore: no-empty-block
void emptyFunction() {}
```

tells the analyzer to ignore this instance of the `no-empty-block` warning.

End-of-line comments are supported as well. The following communicates the same thing:

```dart
void emptyFunction() {} // ignore: no-empty-block
```

To ignore a rule for an entire file, use the `ignore_for_file` comment flag. For example,

```dart
// ignore_for_file: no-empty-block
...

void emptyFunction() {}
```

tells the analyzer to ignore all occurrences of the kebab-case-types warning in this file.

It's the same approach that the dart linter package [use](https://github.com/dart-lang/linter#usage).

Additionally, `exclude` entry for the analyzer config can be used to ignore files. For example,

```yaml title="analysis_options.yaml"
analyzer:
  exclude:
    - example/**
```

will work both for the analyzer and for this plugin.

If you want a specific rule to ignore files, you can configure `exclude` entry for it. For example,

```yaml title="analysis_options.yaml"
dart_code_metrics:
  rules:
    no-equal-arguments:
      exclude:
        - test/**
```
