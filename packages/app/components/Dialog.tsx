import { X } from '@tamagui/lucide-icons'
import {
    Button,
    Dialog,
    Unspaced,
} from 'tamagui'


export function DialogModal({ text, open, onClose }) {
    return (
        <Dialog open={open} >
            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    o={0.5}
                    enterStyle={{ o: 0 }}
                    exitStyle={{ o: 0 }}
                />

                <Dialog.Content
                    bordered
                    elevate
                    key="content"
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    space
                >
                    <Dialog.Title>Modal</Dialog.Title>
                    <Dialog.Description>
                        {text}
                    </Dialog.Description>

                    <Unspaced>
                        <Dialog.Close asChild>
                            <Button pos="absolute" t="$2" r="$2" size="$3" circular icon={X} onClick={onClose} />
                        </Dialog.Close>
                    </Unspaced>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}