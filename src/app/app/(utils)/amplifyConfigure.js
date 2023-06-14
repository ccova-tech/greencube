const myAppConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://qmeu7yiuajd2nkpp5fqbj2dluq.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-ilezr4j5mrdyzm5tr2eke6atrq',
  aws_cognito_identity_pool_id: 'us-east-1:820b28b0-474f-44ee-b02a-4496aae36026',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_EL5Mr8nup',
  aws_user_pools_web_client_id: 'gjnuqvivg45no2eolhh26fgdg',
  oauth: {},
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
      passwordPolicyMinLength: 8,
      passwordPolicyCharacters: []
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
  aws_user_files_s3_bucket: 'ecobuildc1295895a0f043f2a3475853e5478be6193331-dev',
  aws_user_files_s3_bucket_region: 'us-east-1'
}

export default myAppConfig