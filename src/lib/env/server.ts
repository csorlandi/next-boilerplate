import { createEnv } from '@t3-oss/env-nextjs';
import { ZodError, z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },

  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,

  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
});
