/**
 * 
 */
angular.
  module('core.account').
  factory('Account', ['$resource',
    function($resource) {
      return $resource('iluvdb/AccountHandler', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }
  ]);