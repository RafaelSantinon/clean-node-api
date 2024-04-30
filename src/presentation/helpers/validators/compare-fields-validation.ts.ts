import { InvalidParamError } from '../../errors'
import { Validation } from './validation'

export class CompareFieldValidation implements Validation {
  private readonly fieldName: string
  private readonly filedToCompareName: string

  constructor (fieldName: string, filedToCompareName: string) {
    this.fieldName = fieldName
    this.filedToCompareName = filedToCompareName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.filedToCompareName]) {
      return new InvalidParamError(this.filedToCompareName)
    }
  }
}
