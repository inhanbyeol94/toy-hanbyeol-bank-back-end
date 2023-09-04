import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountTypeDto } from '../_common/dtos/createAccountType.dto';
import { IMessage } from '../_common/interfaces/message.interface';
import { CreateAccountDto } from '../_common/dtos/createAccount.dto';
import { IAccountNumber } from '../_common/interfaces/accountNumber.interface';
import { VerifyAccountDto } from '../_common/dtos/verifyAccount.dto';
import { VerifyAccountNumberDto } from '../_common/dtos/verifyAccountNumber.dto';
import { IResult } from '../_common/interfaces/result.interface';
import { PartnerDto } from '../_common/dtos/partner.dto';
import { ISecretKey } from '../_common/interfaces/secretKey.interface';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('type')
  async createAccountType(@Body() newAccountType: CreateAccountTypeDto): Promise<IMessage> {
    return await this.accountService.createAccountType(newAccountType);
  }

  @Post()
  async createAccount(@Body() newAccount: CreateAccountDto): Promise<IAccountNumber> {
    return await this.accountService.createAccount(newAccount);
  }

  @Post('my/verify')
  async verifyMyAccountNumber(@Body() verifyAccount: VerifyAccountDto): Promise<IResult> {
    return await this.accountService.verifyIdentityAndAccount(verifyAccount);
  }

  @Post('verify')
  async verifyAccountNumber(@Body() accountNumberData: VerifyAccountNumberDto): Promise<IResult> {
    return await this.accountService.verifyAccountNumber(accountNumberData);
  }

  @Post('add/partner')
  async addPartner(@Body() partnerData: PartnerDto): Promise<ISecretKey> {
    return await this.accountService.addPartner(partnerData);
  }
}
