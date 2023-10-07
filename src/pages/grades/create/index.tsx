import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createGrade } from 'apiSdk/grades';
import { gradeValidationSchema } from 'validationSchema/grades';
import { UserInterface } from 'interfaces/user';
import { AssignmentInterface } from 'interfaces/assignment';
import { getUsers } from 'apiSdk/users';
import { getAssignments } from 'apiSdk/assignments';
import { GradeInterface } from 'interfaces/grade';

function GradeCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: GradeInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createGrade(values);
      resetForm();
      router.push('/grades');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<GradeInterface>({
    initialValues: {
      grade_grade: 0,
      comment: '',
      date_given: new Date(new Date().toDateString()),
      teacher_id: (router.query.teacher_id as string) ?? null,
      student_id: (router.query.student_id as string) ?? null,
      assignment_id: (router.query.assignment_id as string) ?? null,
    },
    validationSchema: gradeValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Grades',
              link: '/grades',
            },
            {
              label: 'Create Grade',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Grade
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Grade Grade"
            formControlProps={{
              id: 'grade_grade',
              isInvalid: !!formik.errors?.grade_grade,
            }}
            name="grade_grade"
            error={formik.errors?.grade_grade}
            value={formik.values?.grade_grade}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('grade_grade', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.comment}
            label={'Comment'}
            props={{
              name: 'comment',
              placeholder: 'Comment',
              value: formik.values?.comment,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="date_given" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Date Given
            </FormLabel>
            <DatePicker
              selected={formik.values?.date_given ? new Date(formik.values?.date_given) : null}
              onChange={(value: Date) => formik.setFieldValue('date_given', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'teacher_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'student_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<AssignmentInterface>
            formik={formik}
            name={'assignment_id'}
            label={'Select Assignment'}
            placeholder={'Select Assignment'}
            fetcher={getAssignments}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/grades')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'grade',
    operation: AccessOperationEnum.CREATE,
  }),
)(GradeCreatePage);
