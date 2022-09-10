import {Field, ID, ObjectType} from 'type-graphql';

@ObjectType()
class Default {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  name!: string;
}

type BaseDefault = Omit<Default, 'name'>;

export {BaseDefault, Default};
