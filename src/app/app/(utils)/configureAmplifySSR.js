import { Amplify } from 'aws-amplify'
import awsExports from '@/aws-exports.js'
// import awsExports from '../../../aws-exports'

Amplify.configure({...awsExports, ssr:true})