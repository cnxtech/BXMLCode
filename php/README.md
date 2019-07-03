# PHP Bandwidth BXML

This package is a Bandwidth BXML builder written for PHP

## Installing

TBD

## Usage

Usage examples can be found in `sample_script.php`

### Run tests

Tests can be run by executing the following command

```
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/
```

Take note that these tests take a long time to run due to DOMDocument being unable to cache the read XSD file. We are working on a workaround for this.


## BXML Documentation

Bandwidth's BXML documentation can be found on the [currently non existent docsite](https://dev.bandwidth.com)
