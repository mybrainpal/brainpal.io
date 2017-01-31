/**
 * Proudly created by ohad on 01/12/2016.
 */
'use strict';

/**
 * Creates a new Logger.
 * @returns {Object} a BPLogger object.
 * @param {Object} options
 */
function BPLogger(options){
    this.options(options);
}

/**
 * Logs subject to the logger.
 * @param {Object} subject
 */
BPLogger.prototype.log = function(subject){};