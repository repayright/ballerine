import { alert, alertType } from '@prisma/client';
import { alertCreateDto } from './dtos/alert-check.dto';
import { cleanUndefinedValues } from '@/common/utils/clean-undefined-values';
import { JsonValue } from 'type-fest';

export class alertEntityMapper {
  static toEntity(dto: alertCreateDto): Omit<alert, 'createdAt' | 'updatedAt' | 'id'> {
    return {
      alertCorrelationId: dto.correlationId,
      alertDate: dto.date,
      alertAmount: dto.amount,
      alertCurrency: dto.currency,
      alertDescription: dto.description ?? null,
      alertCategory: dto.category ?? null,
      alertType: dto.type ?? null,
      alertStatus: dto.status!,
      alertStatusReason: dto.statusReason ?? null,
      senderAccountId: dto.sender?.accountId ?? null,
      senderName: dto.sender?.name ?? null,
      senderCorrelationId: dto.sender?.correlationId ?? null,
      senderCountry: dto.sender?.country ?? null,
      senderIpAddress: dto.sender?.ipAddress ?? null,
      senderGeoLocation: dto.sender?.geoLocation ?? null,
      senderUserAgent: dto.sender?.userAgent ?? null,
      senderPEPStatus: dto.sender?.PEPStatus?.toString() ?? null,
      senderSanctionListMatchStatus: dto.sender?.sanctionListMatchStatus?.toString() ?? null,
      senderVerificationStatus: dto.sender?.verificationStatus ?? null,
      recipientAccountId: dto.recipient?.accountId ?? null,
      recipientName: dto.recipient?.name ?? null,
      recipientCorrelationId: dto.recipient?.correlationId ?? null,
      recipientCountry: dto.recipient?.country ?? null,
      recipientVerificationStatus: dto.recipient?.verificationStatus ?? null,
      recipientSanctionListMatchStatus: dto.recipient?.sanctionListMatchStatus?.toString() ?? null,
      recipientPEPStatus: dto.recipient?.PEPStatus?.toString() ?? null,
      paymentMethod: dto.payment?.method ?? null,
      paymentType: dto.payment?.type ?? null,
      paymentChannel: dto.payment?.channel ?? null,
      paymentIssuer: dto.payment?.issuer ?? null,
      paymentGateway: dto.payment?.gateway ?? null,
      paymentAcquirer: dto.payment?.acquirer ?? null,
      paymentProcessor: dto.payment?.processor ?? null,
      cardFingerprint: null,
      cardIssuedCountry: null,
      completed3ds: null,
      cardType: null,
      cardIssuer: null,
      cardBrand: null,
      cardExpiryMonth: null,
      cardExpiryYear: null,
      cardHolderName: null,
      cardTokenized: null,
      tags: (dto.tags as JsonValue) ?? {},
      reviewStatus: dto.reviewStatus ?? null,
      reviewerComments: dto.reviewerComments ?? null,
      auditTrail: dto.auditTrail ?? null,
      unusualActivityFlags: dto.unusualActivityFlags ?? null,
      riskScore: dto.riskScore ?? null,
      regulatoryAuthority: dto.regulatoryAuthority ?? null,
      additionalInfo: dto.additionalInfo ?? null,
      productName: dto.product?.name ?? null,
      productDescription: dto.product?.description ?? null,
      productPrice: dto.product?.price ?? null,
      productId: dto.product?.id ?? null,
      businessId: dto.businessId ?? null,
      endUserId: dto.endUserId ?? null,
      projectId: dto.projectId,
    };
  }

  static toDto(entity: alert): alertCreateDto & { id: string } {
    const dto = {
      id: entity.id,
      correlationId: entity.alertCorrelationId,
      date: entity.alertDate,
      amount: entity.alertAmount,
      currency: entity.alertCurrency,
      description: entity.alertDescription ?? undefined,
      category: entity.alertCategory ?? undefined,
      type: entity.alertType as alertType | undefined,
      status: entity.alertStatus ?? undefined,
      statusReason: entity.alertStatusReason ?? undefined,
      sender: {
        accountId: entity.senderAccountId ?? undefined,
        correlationId: entity.senderCorrelationId ?? undefined,
        name: entity.senderName ?? undefined,
        country: entity.senderCountry ?? undefined,
        ipAddress: entity.senderIpAddress ?? undefined,
        geoLocation: entity.senderGeoLocation ?? undefined,
        userAgent: entity.senderUserAgent ?? undefined,
        PEPStatus: entity.senderPEPStatus ?? undefined,
        sanctionListMatchStatus: entity.senderSanctionListMatchStatus ?? undefined,
        verificationStatus: entity.senderVerificationStatus ?? undefined,
      },
      recipient: {
        accountId: entity.recipientAccountId ?? undefined,
        correlationId: entity.recipientCorrelationId ?? undefined,
        enduserId: null ?? undefined,
        name: entity.recipientName ?? undefined,
        country: entity.recipientCountry ?? undefined,
        verificationStatus: entity.recipientVerificationStatus ?? undefined,
        sanctionListMatchStatus: entity.recipientSanctionListMatchStatus ?? undefined,
        PEPStatus: entity.recipientPEPStatus ?? undefined,
      },
      payment: {
        method: entity.paymentMethod ?? undefined,
        type: entity.paymentType ?? undefined,
        channel: entity.paymentChannel ?? undefined,
        issuer: entity.paymentIssuer ?? undefined,
        gateway: entity.paymentGateway ?? undefined,
        acquirer: entity.paymentAcquirer ?? undefined,
        processor: entity.paymentProcessor ?? undefined,
      },
      product: {
        name: entity.productName ?? undefined,
        description: entity.productDescription ?? undefined,
        price: entity.productPrice ?? undefined,
        id: entity.productId ?? undefined,
      },
      tags: entity.tags ?? undefined,
      reviewStatus: entity.reviewStatus ?? undefined,
      reviewerComments: entity.reviewerComments ?? undefined,
      auditTrail: entity.auditTrail ?? undefined,
      unusualActivityFlags: entity.unusualActivityFlags ?? undefined,
      riskScore: entity.riskScore ?? undefined,
      regulatoryAuthority: entity.regulatoryAuthority ?? undefined,
      additionalInfo: entity.additionalInfo ?? undefined,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      businessId: entity.businessId ?? undefined,
      endUserId: entity.endUserId ?? undefined,
      projectId: entity.projectId ?? undefined,
    };

    return cleanUndefinedValues<alertCreateDto & { id: string }>(dto);
  }
}
