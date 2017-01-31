/**
 * Proudly created by ohad on 01/12/2016.
 */
'use strict';

/**
 * Creates a new Collector.
 * @returns {Object} a BPCollector object.
 * @param {Object} options
 */
function BPCollector(options) {
    this.options(options);
}

BPCollector.prototype.options = function(options) {};

/**
 * Creates an analytics event on target.
 * @param {Object} target collection target and trigger.
 * @param {Object} subject additional data that's relevant to the event.
 */
BPCollector.prototype.collect = function(target, subject) {};

