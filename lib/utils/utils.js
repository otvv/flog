/*
*/

'use strict'

export const flags = {
  bold: '\x1b[1;37m',
  reset: '\x1b[1;0m',
  blink: '\x1b[5m',
  dim: '\x1b[2m',
  bright: '\x1b[1m',
  hidden: '\x1b[8m'
}

// colors dictionary
export const textColor = {
  black: '\x1b[1;30m',
  red: '\x1b[1;31m',
  green: '\x1b[1;32m',
  yellow: '\x1b[1;33m',
  blue: '\x1b[1;34m',
  purple: '\x1b[1;35m',
  cyan: '\x1b[1;36m',
  white: '\x1b[1;37m',
};

export const backgroundColor = {
  black: '\x1b[40m',
  red: '\x1b[41m',
  green: '\x1b[42m',
  yellow: '\x1b[43m',
  blue: '\x1b[44m',
  purple: '\x1b[45m',
  cyan: '\x1b[46m',
  white: '\x1b[47m',
};
