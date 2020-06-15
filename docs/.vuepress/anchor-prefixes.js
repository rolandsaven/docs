/**
 * Each key, when used as an anchor prefix, will be expanded into a full link
 * based on the rules of `format`.
 * 
 * Format can be... 
 * - `internal` for Craft+Commerce class docs
 * - `yii` for yii2 docs
 * - `config` for Craft config settings
 * - `generic` for replacement of the supplied `base` only and no additional formatting
 */
module.exports = {
  'craft3': { base: 'https://docs.craftcms.com/api/v3/', format: 'internal' },
  'craft2': { base: 'https://docs.craftcms.com/api/v2/', format: 'internal' },
  'commerce3': { base: 'https://docs.craftcms.com/commerce/api/v3/', format: 'internal' },
  'commerce2': { base: 'https://docs.craftcms.com/commerce/api/v2/', format: 'internal' },
  'commerce1': { base: 'https://docs.craftcms.com/commerce/api/v1/', format: 'internal' },
  'yii2': { base: 'https://www.yiiframework.com/doc/api/2.0/', format: 'yii' },
  'config': { base: '/config/config-settings.md#', format: 'config' },
};