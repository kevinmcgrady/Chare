import { render, screen, act } from '@testing-library/react';
import { Timer } from './Timer.component';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('Timer', () => {
  it('should start as 00:00:00', () => {
    render(<Timer date={new Date('12-12-2023')} />);

    expect(screen.getByText('Auction ends in:'));
    expect(screen.getByText('Hours'));
    expect(screen.getByText('Minutes'));
    expect(screen.getByText('Seconds'));
    expect(screen.getByLabelText('hours')).toHaveTextContent('00:Hours');
    expect(screen.getByLabelText('minutes')).toHaveTextContent('00:Minutes');
    expect(screen.getByLabelText('seconds')).toHaveTextContent('00Seconds');
  });

  it('should count down', async () => {
    render(<Timer date={new Date()} />);
    await act(() => sleep(1000));
    expect(screen.getByLabelText('hours')).toHaveTextContent('00:Hours');
    expect(screen.getByLabelText('minutes')).toHaveTextContent('59:Minutes');
    expect(screen.getByLabelText('seconds')).toHaveTextContent('58Seconds');
  });
});
