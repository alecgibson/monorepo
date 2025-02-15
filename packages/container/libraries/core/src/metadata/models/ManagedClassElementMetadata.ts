import { LazyServiceIdentifier, ServiceIdentifier } from '@inversifyjs/common';

import { BaseClassElementMetadata } from './BaseClassElementMetadata';
import { ClassElementMetadataKind } from './ClassElementMetadataKind';
import { MetadataName } from './MetadataName';
import { MetadataTag } from './MetadataTag';
import { MetadataTargetName } from './MetadataTargetName';

export interface ManagedClassElementMetadata
  extends BaseClassElementMetadata<
    | ClassElementMetadataKind.singleInjection
    | ClassElementMetadataKind.multipleInjection
  > {
  value: ServiceIdentifier | LazyServiceIdentifier;
  name: MetadataName | undefined;
  optional: boolean;
  tags: Map<MetadataTag, unknown>;
  targetName: MetadataTargetName | undefined;
}
