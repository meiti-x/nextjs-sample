import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { Fragment, useRef } from 'react';

import Button from '@/components/ui/Button';

export interface ModalProps {
  title: string;
  content: ReactNode;
  showCancel?: boolean;
  onSubmit?: () => void;
  showFooter?: boolean;
  visible: boolean;
  setVisible: (status: boolean) => void;
}

export default function Modal(
  {
    title, content, visible, setVisible, onSubmit, showCancel, showFooter
  }: ModalProps
) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-50'
        initialFocus={cancelButtonRef}
        onClose={setVisible}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div
            className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel
                className='relative my-8 w-full max-w-lg overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all'
              >
                <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 w-full'>
                      <Dialog.Title
                        as='h6'
                        className='text-center text-gray-700'
                      >
                        {title}
                      </Dialog.Title>
                      <hr className='my-5' />
                      <div className='mt-2 text-right'>
                        {content}
                      </div>
                    </div>
                  </div>
                </div>
                {showFooter
                  ? (
                    <div className='mt-3 justify-center gap-3 bg-gray-50 p-2 sm:flex'>
                      <Button
                        variant='primary'
                        onClick={() => {
                          setVisible(false);
                          onSubmit?.();
                        }}
                      >
                        Deactivate
                      </Button>
                      {showCancel ? (
                        <Button
                          variant='outline'
                          size='small'
                          onClick={() => setVisible(false)}
                          ref={cancelButtonRef}
                        >
                          انصراف
                        </Button>
                      ) : null}
                    </div>
                  )
                  : undefined}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
