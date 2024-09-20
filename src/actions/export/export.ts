import { RootConfigService } from '@backstage/backend-plugin-api';
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';

/**
 * Creates an `acme:example` Scaffolder action.
 *
 * @remarks
 *
 * See {@link https://example.com} for more information.
 *
 * @public
 */
export function exportConfigVariableAction(config: RootConfigService) {
  // For more information on how to define custom actions, see
  //   https://backstage.io/docs/features/software-templates/writing-custom-actions
  return createTemplateAction<{
    configKey: string;
  }>({
    id: 'rhdhe:export',
    description: 'exports a variable from the config',
    schema: {
      input: {
        type: 'object',
        required: ['configKey'],
        properties: {
          configKey: {
            title: 'Key for configuration',
            description: 'This is the key for the configuration you want to output',
            type: 'string',
          },
        },
      },
    },
    async handler(ctx) {
      ctx.logger.info(
        `Running get config with configkey: ${ctx.input.configKey}`,
      );

     
      ctx.output('configResult', config.get(ctx.input.configKey));
    },
  });
}
