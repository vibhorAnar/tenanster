import {
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from '@apollo/client';

// export type UQOptions<OUTPUT, INPUT = {}> = Parameters<
//   typeof useQuery<OUTPUT, INPUT>
// >[1];
// export type ULQOptions<OUTPUT, INPUT = {}> = Parameters<
//   typeof useLazyQuery<OUTPUT, INPUT>
// >[1];
export type MOptions<OUTPUT, INPUT = {}> = Parameters<
  typeof useMutation<OUTPUT, INPUT>
>[1];
// export type SOptions<OUTPUT, INPUT = {}> = Parameters<
//   typeof useSubscription<OUTPUT, INPUT>
// >[1];
