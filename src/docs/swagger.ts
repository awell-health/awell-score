export const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Awell Score API',
    description:
      'A RESTful API to browse, execute and simulate calculations available in the Awell Score Suite.',
    version: '1.0',
    contact: {
      name: 'Awell Health',
      url: 'https://awell.health',
      email: 'nick@awellhealth.com',
    },
  },
  servers: [
    {
      description: 'Awell Score - Development',
      url: 'https://score-api.development.awellhealth.com',
    },
    {
      description: 'Awell Score - Staging',
      url: 'https://score-api.staging.awellhealth.com',
    },
  ],
  tags: [
    {
      name: 'Calculations',
      description: '',
      externalDocs: {
        description: 'Visit Awell Score Playground',
        url: 'https://score.staging.awellhealth.com',
      },
    },
  ],
  components: {
    schemas: {
      Calculation: {
        type: 'object',
        required: [
          'calculation_id',
          'calculation_name',
          'calculation_description',
          'calculation_blueprint',
          'is_private',
        ],
        properties: {
          calculation_id: {
            type: 'string',
          },
          calculation_name: {
            $ref: '#/components/schemas/label',
          },
          calculation_description: {
            $ref: '#/components/schemas/label',
          },
          calculation_blueprint: {
            type: 'object',
            required: ['input_definition', 'output_definition'],
            properties: {
              input_definition: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/calculationParameter',
                },
              },
              output_defintion: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/calculationOutputDefinition',
                },
              },
            },
          },
          is_private: {
            type: 'boolean',
          },
        },
      },
      CalculationResult: {
        type: 'object',
        required: ['subresult_id', 'label', 'result', 'status'],
        properties: {
          subresult_id: {
            type: 'string',
          },
          label: { $ref: '#/components/schemas/label' },
          result: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'integer',
              },
              {
                type: 'boolean',
              },
            ],
          },
          unit: {
            $ref: '#/components/schemas/label',
          },
          interpretation: {
            $ref: '#/components/schemas/label',
          },
          status: {
            type: 'string',
            enum: ['CALCULATED', 'NOT APPLICABLE', 'MISSING'],
          },
        },
      },
      label: {
        type: 'object',
        required: ['en'],
        properties: {
          en: {
            type: 'string',
          },
          nl: {
            type: 'string',
          },
          fr: {
            type: 'string',
          },
          de: {
            type: 'string',
          },
        },
      },
      booleanInputType: {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            enum: ['boolean'],
          },
          allowed_answers: {
            type: 'object',
            required: ['value'],
            properties: {
              value: {
                type: 'boolean',
              },
              label: {
                $ref: '#/components/schemas/label',
              },
            },
          },
        },
      },
      dateInputType: {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            enum: ['date'],
          },
        },
      },
      numberInputType: {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            enum: ['number'],
          },
          allowed_answers: {
            type: 'object',
            required: ['value'],
            properties: {
              value: {
                type: 'number',
              },
              label: {
                $ref: '#/components/schemas/label',
              },
            },
          },
          range: {
            type: 'object',
            required: ['min', 'max'],
            properties: {
              min: {
                type: 'object',
                required: ['value'],
                properties: {
                  value: {
                    type: 'number',
                  },
                  label: {
                    $ref: '#/components/schemas/label',
                  },
                },
              },
              max: {
                type: 'object',
                required: ['value'],
                properties: {
                  value: {
                    type: 'number',
                  },
                  label: {
                    $ref: '#/components/schemas/label',
                  },
                },
              },
            },
          },
        },
      },
      numbersArrayInputType: {
        type: 'object',
        required: ['type', 'allowed_answers'],
        properties: {
          type: {
            type: 'string',
            enum: ['numbers_array'],
          },
          allowed_answers: {
            type: 'object',
            required: ['value'],
            properties: {
              value: {
                type: 'number',
              },
              label: {
                $ref: '#/components/schemas/label',
              },
            },
          },
        },
      },
      stringInputType: {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            enum: ['string'],
          },
          allowed_answers: {
            type: 'object',
            required: ['value'],
            properties: {
              value: {
                type: 'string',
              },
              label: {
                $ref: '#/components/schemas/label',
              },
            },
          },
        },
      },
      stringsArrayInputType: {
        type: 'object',
        required: ['type', 'allowed_answers'],
        properties: {
          type: {
            type: 'string',
            enum: ['strings_array'],
          },
          allowed_answers: {
            type: 'object',
            required: ['value'],
            properties: {
              value: {
                type: 'string',
              },
              label: {
                $ref: '#/components/schemas/label',
              },
            },
          },
        },
      },
      calculationOutputDefinition: {
        type: 'object',
        required: ['subresult_id', 'label', 'type'],
        properties: {
          subresult_id: {
            type: 'string',
          },
          label: { $ref: '#/components/schemas/label' },
          type: {
            type: 'string',
            enum: ['date', 'boolean', 'string', 'number'],
          },
          unit: { $ref: '#/components/schemas/label' },
          interpretation: { $ref: '#/components/schemas/label' },
        },
      },
      calculationParameter: {
        type: 'object',
        required: ['id', 'input_type'],
        properties: {
          id: {
            type: 'string',
          },
          label: { $ref: '#/components/schemas/label' },
          type: {
            oneOf: [
              {
                $ref: '#/components/schemas/booleanInputType',
              },
              {
                $ref: '#/components/schemas/dateInputType',
              },
              {
                $ref: '#/components/schemas/numberInputType',
              },
              {
                $ref: '#/components/schemas/numbersArrayInputType',
              },
              {
                $ref: '#/components/schemas/stringInputType',
              },
              {
                $ref: '#/components/schemas/stringsArrayInputType',
              },
            ],
          },
          info: {
            $ref: '#/components/schemas/label',
          },
          format: {
            type: 'string',
          },
        },
      },
      calculationNotFound: {
        type: 'object',
        required: ['message'],
        properties: {
          error: {
            type: 'object',
            required: ['message'],
            properties: {
              message: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
  paths: {
    '/v1/calculations': {
      get: {
        tags: ['Calculations'],
        summary: 'Returns all calculations in our library',
        description:
          'Returns all available calculations in the Awell Calculation Suite Library',
        responses: {
          '200': {
            description: 'When the calculations can be successfully returned.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Calculation',
                  },
                },
              },
            },
          },
          '500': {
            description:
              'When something went wrong while getting all the calculations.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['error'],
                  properties: {
                    error: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ['Calculations'],
        summary: 'Execute a calculation',
        description: 'Execute a single calculation',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['calculation_id'],
                properties: {
                  calculation_id: {
                    type: 'string',
                  },
                  calculation_input: {
                    type: 'object',
                    additionalProperties: {
                      oneOf: [
                        {
                          type: 'string',
                        },
                        {
                          type: 'integer',
                        },
                      ],
                    },
                  },
                  meta_data: {
                    type: 'object',
                    additionalProperties: {
                      oneOf: [
                        {
                          type: 'string',
                        },
                        {
                          type: 'number',
                        },
                        {
                          type: 'integer',
                        },
                        {
                          type: 'boolean',
                        },
                      ],
                    },
                  },
                },
              },
              examples: {
                bmi: {
                  summary: 'BMI',
                  value: {
                    calculation_id: 'bmi',
                    calculation_input: {
                      height: 170,
                      weight: 75,
                    },
                    meta_data: {
                      sending_system_request_id:
                        'an_identifier_from_the_sending_system',
                      meta_data_is_optional: 'add_whatever_parameters_you_want',
                    },
                  },
                },
                start_back_screening_tool: {
                  summary: 'Start Back Screening Tool',
                  value: {
                    calculation_id: 'start_back_screening_tool',
                    calculation_input: {
                      Q01: 1,
                      Q02: 0,
                      Q03: 1,
                      Q04: 1,
                      Q05: 1,
                      Q06: 1,
                      Q07: 1,
                      Q08: 0,
                      Q09: 3,
                    },
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description:
              'Returns a list of results for the executed calculation.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/CalculationResult' },
                },
              },
            },
          },
          '404': {
            description:
              'When the calculation you want to execute could not be found.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/calculationNotFound',
                },
              },
            },
          },
          '500': {
            description:
              'When something went wrong while executing the calculations',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['error'],
                  properties: {
                    error: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/v1/calculations/search': {
      get: {
        tags: ['Calculations'],
        summary: 'Search for a calculation',
        description:
          'Search for a calculation based on the identifier of the calculation.',
        parameters: [
          {
            name: 'calculation_name',
            in: 'query',
            description: 'Name of the calculation you want to search for',
            required: true,
            schema: {
              type: 'string',
            },
            examples: {
              bmi: {
                summary: 'BMI',
                value: 'bmi',
              },
              start_back_screening_tool: {
                summary: 'Start Back Screening Tool',
                value: 'start_back_screening_tool',
              },
            },
          },
        ],
        responses: {
          '200': {
            description:
              'Will return a list of calculations that matches the given search parameter.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Calculation',
                  },
                },
              },
            },
          },
          '400': {
            description: 'When the search query was invalid.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['error'],
                  properties: {
                    error: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description:
              'When something went wrong while searching calculations.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['error'],
                  properties: {
                    error: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/v1/calculations/{calculation_id}': {
      get: {
        tags: ['Calculations'],
        summary: 'Returns one calculation',
        description:
          'Get a specific calculation based on the id of the calculation.',
        parameters: [
          {
            name: 'calculation_id',
            in: 'path',
            description: 'Identifier of the calculation you want to retrieve.',
            required: true,
            schema: {
              type: 'string',
            },
            examples: {
              bmi: {
                summary: 'BMI',
                value: 'bmi',
              },
              start_back_screening_tool: {
                summary: 'Start Back Screening Tool',
                value: 'start_back_screening_tool',
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Will return a single calculation.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Calculation',
                },
              },
            },
          },
          '404': {
            description: 'When the calculation could not be found.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/calculationNotFound',
                },
              },
            },
          },
          '500': {
            description: 'When something went while getting the calculations',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['error'],
                  properties: {
                    error: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/v1/calculations/simulate/{calculation_id}': {
      get: {
        tags: ['Calculations'],
        summary: 'Simulate a calculation',
        description:
          'Simulate a calculation. A simulation will randomly generate input for the calculation and based on the simulated input the results will be calculated.',
        parameters: [
          {
            name: 'calculation_id',
            in: 'path',
            description: 'Identifier of the calculation you want to simulate.',
            required: true,
            schema: {
              type: 'string',
            },
            examples: {
              bmi: {
                summary: 'BMI',
                value: 'bmi',
              },
              start_back_screening_tool: {
                summary: 'Start Back Screening Tool',
                value: 'start_back_screening_tool',
              },
            },
          },
        ],
        responses: {
          '200': {
            description: '',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: [
                    'simulated_calculation_input',
                    'simulated_calculation_results',
                  ],
                  properties: {
                    simulated_calculation_input: {
                      type: 'object',
                      additionalProperties: {
                        oneOf: [
                          {
                            type: 'string',
                          },
                          {
                            type: 'integer',
                          },
                        ],
                      },
                    },
                    simulated_calculation_results: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/CalculationResult' },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description:
              'When the calculation you want to simulate could not be found.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/calculationNotFound',
                },
              },
            },
          },
        },
      },
    },
  },
}
